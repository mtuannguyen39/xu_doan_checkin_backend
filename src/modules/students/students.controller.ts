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
