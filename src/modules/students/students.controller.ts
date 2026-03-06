import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import { generateStudentId } from "../../utils/generateStudentId";
import { AuthRequest } from "../../middleware/auth.middleware";

interface StudentParams {
  qr: string;
}

export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { full_name, saint_name, class_name, nganh } = req.body;

    if (!full_name || !saint_name || !class_name || !nganh) {
      return res.status(400).json({ error: "Thiếu thông tin thiếu nhi" });
    }

    const studentId = await generateStudentId(prisma, nganh, class_name);

    const student = await prisma.student.create({
      data: {
        id: studentId,
        full_name,
        saint_name,
        class_name,
        nganh,
        qr_code: uuidv4(),
      },
    });

    // ✅ FIX: giữ lại qr_code trong response để frontend lưu localStorage
    // frontend cần qr_code để render QRCodeCanvas
    return res.status(201).json({
      message: "Thiếu nhi đã được tạo thành công!",
      data: student, // trả toàn bộ, bao gồm qr_code
    });
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).json({ error: "Failed to create student" });
  }
};

export const getStudentByQR = async (
  req: Request<StudentParams>,
  res: Response,
) => {
  try {
    const { qr } = req.params;

    if (!uuidValidate(qr)) {
      return res.status(400).json({ error: "Invalid QR code format" });
    }

    const student = await prisma.student.findUnique({
      where: { qr_code: qr },
      include: { checkins: true },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Không trả qr_code khi lookup bằng QR (bảo mật)
    const { qr_code, ...safeData } = student;
    return res.json(safeData);
  } catch (error) {
    console.error("Error fetching student:", error);
    return res.status(500).json({ error: "Error fetching student" });
  }
};

export const getAllStudents = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { role, class_name } = req.user;

    const whereCondition =
      role === "TRUONG_LOP" && class_name ? { class_name } : {};

    const students = await prisma.student.findMany({
      where: whereCondition,
      orderBy: { created_at: "desc" },
    });

    return res.json(students);
  } catch (error) {
    return res.status(500).json({ error: "Error to fetch students" });
  }
};

// UPDATE STUDENT
// SUPER_ADMIN và TRUONG_LOP được cập nhật lớp mìn
// Các role khác: không có quyền, cần được SUPER_ADMIN cấp
// Chỉ cho sửa: full_name, saint_name,  is_active
// Không cho sửa: ID, class_name, nganh (ảnh hưởng đến hệ thống)
export const updateStudent = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const id = String(req.params["id"]);
    const { role, class_name } = req.user;
    const { full_name, saint_name, phone, is_active } = req.body;

    if (role !== "SUPER_ADMIN" && role !== "TRUONG_LOP") {
      return res
        .status(403)
        .json({ error: "Bạn không có quyền chỉnh sửa thiếu nhi!" });
    }

    const student = await prisma.student.findUnique({ where: { id } });
    if (!student)
      return res.status(404).json({ error: "Không tìm thấy thiếu nhi!" });

    if (role === "TRUONG_LOP" && student.class_name !== class_name) {
      return res
        .status(403)
        .json({
          error: "Bạn chỉ có thể chỉnh sửa thiếu nhi trong lớp của bạn!",
        });
    }

    const updated = await prisma.student.update({
      where: { id },
      data: {
        ...(full_name !== undefined && { full_name }),
        ...(saint_name !== undefined && { saint_name }),
        ...(phone !== undefined && { phone }),
        ...(is_active !== undefined && { is_active }),
      },
    });

    const { qr_code, ...safeData } = updated;
    return res.json({
      message: "Cập nhật thông tin thành công!",
      data: safeData,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    return res.status(500).json({ error: "Cập nhật thất bại!" });
  }
};

// DELETE STUDENT
// SUPER_ADMIN được xóa bất kì ai
// TRUONG_LOP chỉ được xóa student trong lớp mình
// Các role khác: không có quyền, cần được SUPER_ADMIN cấp
export const deleteStudent = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const id = String(req.params["id"]);
    const { role, class_name } = req.user;

    // Chỉ SUPER_ADMIN và TRUONG_LOP được xóa
    if (role !== "SUPER_ADMIN" && role !== "TRUONG_LOP") {
      return res.status(403).json({
        error: "Bạn không có quyền xóa thiếu nhi!",
      });
    }

    // Tìm student cần xóa
    const student = await prisma.student.findUnique({ where: { id } });

    if (!student) {
      return res.status(404).json({ error: "Không tìm thấy thiếu nhi!" });
    }

    // TRUONG_LOP chỉ được xóa student trong lớp mình
    if (role === "TRUONG_LOP" && student.class_name !== class_name) {
      return res.status(403).json({
        error: "Bạn chỉ có thể xóa thiếu nhi trong lớp của mình!",
      });
    }

    // Xóa checkin details trước (foreign key constraint)
    await prisma.checkinDetail.deleteMany({
      where: { checkin: { student_id: id } },
    });

    // Xóa checkins
    await prisma.checkin.deleteMany({ where: { student_id: id } });

    // Xóa student
    await prisma.student.delete({ where: { id } });

    return res.json({
      message: `Đã xóa thiếu nhi ${student.full_name} thành công!`,
    });
  } catch (error) {
    console.error("Error deleting student:", error);
    return res.status(500).json({ error: "Xóa thiếu nhi thất bại!" });
  }
};

export const getQRByStudentId = async (req: AuthRequest, res: Response) => {
  try {
    if(!req.user) return res.status(401).json({error: "Unauthorized!"});

    const id = String(req.params["id"]);
    const {role, class_name} = req.user;

    const student = await prisma.student.findUnique({where: {id}});
    if(!student) return res.status(404).json({error: "Không tìm thấy thiếu nhi!"});

    // TRUONG_LOP  chỉ xem được lớp mình
    if(role === "TRUONG_LOP" && student.class_name !== class_name) {
      return res.status(403).json({error: "Bạn chỉ có thể xem QR của thiếu nhi trong lớp mình!"});
    }

    return res.json({
      data: {
        id: student.id,
        full_name: student.full_name,
        saint_name: student.saint_name,
        class_name: student.class_name,
        nganh: student.nganh,
        qr_code: student.qr_code // UUID để render QR
      }
    }) 
  } catch (error) {
    return res.status(500).json({error: "Lấy QR thất bại!"});
  }
}