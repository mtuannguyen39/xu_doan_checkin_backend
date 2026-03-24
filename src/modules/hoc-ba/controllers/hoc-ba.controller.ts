import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { AuthRequest } from "../../../middleware/auth.middleware";

// ADMIN Endpoint

// GET /api/hoc-ba/students/:id -- xem đầy đủ profile + điểm theo năm học
export const getStudentHocBa = async (req: AuthRequest, res: Response) => {
  try {
    const id = String(req.params["id"]);
    const schoolYearId =
      req.query["school_year_id"] ?
        Number(req.query["school_year_id"])
      : undefined;

    // Lấy năm học active nếu không truyền vào
    let targetYearId = schoolYearId;
    if (!targetYearId) {
      const activeYear = await prisma.schoolYear.findFirst({
        where: { is_active: true },
      });
      targetYearId = activeYear?.id;
    }

    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        scores:
          targetYearId ?
            {
              where: { school_year_id: targetYearId },
              orderBy: { score_type: "asc" },
            }
          : { orderBy: { score_type: "asc" } },
      },
    });

    if (!student)
      return res.status(404).json({ error: "Không tìm thấy thiếu nhi!" });

    // Lấy trưởng/sour phụ trách lớp trong năm học này
    const assignments =
      targetYearId ?
        await prisma.classLeaderAssignment.findMany({
          where: {
            school_year_id: targetYearId,
            class_name: student.class_name,
          },
          include: {
            user: { select: { id: true, full_name: true, role: true } },
          },
        })
      : [];

    const { qr_code, hoc_ba_token, ...safeStudent } = student;
    return res.json({ data: { ...safeStudent, assignments } });
  } catch (error) {
    return res.status(500).json({ error: "Lấy profile thất bại!" });
  }
};

// PUT /api/hoc-ba/students/:id/info - cập nhật thông tin mở rộng (phụ huynh, email?)
export const updateStudentInfo = async (req: AuthRequest, res: Response) => {
  try {
    const id = String(req.params["id"]);
    const {
      email,
      parent_father_name,
      parent_father_phone,
      parent_mother_name,
      parent_mother_phone,
    } = req.body;

    const student = await prisma.student.findUnique({ where: { id } });
    if (!student)
      return res.status(404).json({ error: "Không tìm thấy thiếu nhi!" });

    // TRUONG_LOP chỉ cập nhật lớp mình
    if (
      req.user?.role === "TRUONG_LOP" &&
      student.class_name !== req.user?.class_name
    ) {
      return res
        .status(403)
        .json({ error: "Anh/Chị chỉ có thể cập nhật thiếu nhi ở lớp mình!" });
    }

    const updated = await prisma.student.update({
      where: { id },
      data: {
        ...(email !== undefined && { email }),
        ...(parent_father_name !== undefined && { parent_father_name }),
        ...(parent_father_phone !== undefined && { parent_father_phone }),
        ...(parent_mother_name !== undefined && { parent_mother_name }),
        ...(parent_mother_phone !== undefined && { parent_mother_phone }),
      },
    });

    const { qr_code, hoc_ba_token, ...safeData } = updated;
    return res.json({
      message: "Cập nhật thông tin thành công!",
      data: safeData,
    });
  } catch (error) {
    return res.status(500).json({ error: "Cập nhật thông tin thất bại!" });
  }
};

// POST /api/hoc-ba/student/:id/scores - thêm hoặc cập nhật 1 điểm (upsert)
export const upsertScore = async (req: AuthRequest, res: Response) => {
  try {
    const student_id = String(req.params["id"]);
    const { school_year_id, score_type, label, value, note } = req.body;

    if (!school_year_id || !score_type || !label) {
      return res.status(400).json({ error: "Thiếu thông tin điểm của các em" });
    }

    const score = await prisma.academicScore.upsert({
      where: {
        student_id_school_year_id_score_type: {
          student_id,
          school_year_id: Number(school_year_id),
          score_type,
        },
      },
      update: {
        label,
        ...(value !== undefined && { value }),
        ...(note !== undefined && { note }),
      },
      create: {
        student_id,
        school_year_id: Number(school_year_id),
        score_type,
        label,
        value: value ?? null,
        note: note ?? null,
      },
    });

    return res.json({ message: "Lưu điểm thành công!", data: score });
  } catch (error) {
    console.error("Lưu điểm thất bại: ", error);
    return res.status(500).json({ error: "Lưu điểm thất bại!" });
  }
};

// DELETE /api/hoc-ba/students/:id/scores/:scoreId - xóa 1 điểm
export const deleteScore = async (req: AuthRequest, res: Response) => {
  try {
    const scoreId = Number(req.params["scoreId"]);
    await prisma.academicScore.delete({ where: { id: scoreId } });
    return res.json({ message: "Xóa điểm của thiếu nhi thành công!" });
  } catch (error) {
    return res.status(500).json({ error: "Xóa điểm của thiếu nhi thất bại!" });
  }
};

// GET /api/hoc-ba/students/:id/token - lấy hoc-ba-token để tạo QR
export const getHocBaToken = async (req: AuthRequest, res: Response) => {
  try {
    const id = String(req.params["id"]);
    const student = await prisma.student.findUnique({ where: { id } });
    if (!student)
      return res.status(404).json({ error: "Không tìm thấy thiếu nhi!" });

    return res.json({
      data: {
        id: student.id,
        full_name: student.full_name,
        class_name: student.class_name,
        hoc_ba_token: student.hoc_ba_token,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Lấy token thất bại" });
  }
};

// PUBLIC ENDPOINT (Mục tiêu sử dụng chức năng đăng nhập)

// GET /api/hoc-ba/public/:token - xem học bạ qua QR link
export const getPublicHocBa = async (req: Request, res: Response) => {
  try {
    const token = String(req.params["token"]);

    // Lấy trưởng/sour phụ trách lớp trong năm active
    const activeYear = await prisma.schoolYear.findFirst({
      where: { is_active: true },
    });

    const student = await prisma.student.findUnique({
      where: { hoc_ba_token: token },
      include: {
        scores: {
          where: {
            school_year_id: activeYear?.id,
          },
          orderBy: {
            score_type: "asc",
          },
        },
      },
    });

    if (!student)
      return res
        .status(404)
        .json({ error: "Không tìm thấy học bạ của thiếu nhi!" });

    const assignments =
      activeYear ?
        await prisma.classLeaderAssignment.findMany({
          where: {
            school_year_id: activeYear.id,
            class_name: student.class_name,
          },
          include: {
            user: { select: { full_name: true, role: true } },
          },
        })
      : [];

    // Chỉ trả thông tin cần thiết - không trả QR_code (CheckinQR) và hoc_ba)token
    return res.json({
      data: {
        id: student.id,
        full_name: student.full_name,
        saint_name: student.saint_name,
        nganh: student.nganh,
        email: student.email,
        parent_father_name: student.parent_father_name,
        parent_father_phone: student.parent_father_phone,
        parent_mother_name: student.parent_mother_name,
        parent_mother_phone: student.parent_mother_phone,
        scores: student.scores,
        school_year: activeYear?.name ?? null,
        assignments,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Lấy học bạ thất bại" });
  }
};
