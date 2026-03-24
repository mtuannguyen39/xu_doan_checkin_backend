import { Response } from "express";
import { prisma } from "../../../lib/prisma";
import { AuthRequest } from "../../../middleware/auth.middleware";

// GET /api/class-assignment?school_year_id=$class_name=
export const getAssignments = async (req: AuthRequest, res: Response) => {
  try {
    const school_year_id =
      req.query["school_year_id"] ?
        Number(req.query["school_year_id"])
      : undefined;
    const class_name = req.query["class_name"] as string | undefined;

    const assignments = await prisma.classLeaderAssignment.findMany({
      where: {
        ...(school_year_id && { school_year_id }),
        ...(class_name && { class_name }),
      },
      include: {
        user: { select: { id: true, full_name: true, role: true } },
        schoolYear: { select: { id: true, name: true } },
      },
      orderBy: [{ class_name: "asc" }, { assignment_role: "asc" }],
    });

    return res.json(assignments);
  } catch (error) {
    return res.status(500).json({ error: "Lấy danh sách phân công thất bại!" });
  }
};

export const createAssignment = async (req: AuthRequest, res: Response) => {
  try {
    const { school_year_id, class_name, user_id, assignment_role } = req.body;

    if (!school_year_id || !class_name || !user_id || !assignment_role) {
      return res.status(400).json({ error: "Thiếu thông tin" });
    }

    const validRoles = ["HUYNH_TRUONG", "DU_TRUONG", "SOUR"];
    if (!validRoles.includes(assignment_role)) {
      return res.status(400).json({ error: "Vai trò không hợp lệ!" });
    }

    const assignment = await prisma.classLeaderAssignment.create({
      data: {
        school_year_id: Number(school_year_id),
        class_name,
        user_id: Number(user_id),
        assignment_role,
      },
      include: {
        user: { select: { id: true, full_name: true, role: true } },
      },
    });

    return res
      .status(201)
      .json({ message: "Phân công thành công!", data: assignment });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error:
          "Trưởng/Sour này đã được phân công vào lớp khác. Vui lòng thử lại sau!!!",
      });
    }
    return res.status(500).json({ error: "Phân công thất bại!" });
  }
};

// DELETE /api/class-assignments/:id - xóa phân công
export const deleteAssignment = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);
    await prisma.classLeaderAssignment.delete({ where: { id } });
    return res.json({ message: "Đã xóa phân công!" });
  } catch (error) {
    return res.status(500).json({ error: "Xóa phân công thất bại!" });
  }
};

// PUT /api/class-assignments/:id -- cập nhật phân công (đổi user hoặc role)
// Dùng khi: trưởng/sour lên lớp mới, hoặc đổi trưởng/sour khác vào lớp
export const updateAssignment = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);
    const { user_id, assignment_role, class_name } = req.body;

    const existing = await prisma.classLeaderAssignment.findUnique({
      where: { id },
    });
    if (!existing) {
      return res.status(404).json({ error: "Không tìm thấy phân công!" });
    }

    if (assignment_role) {
      const validRoles = ["HUYNH_TRUONG", "DU_TRUONG", "SOUR"];
      if (!validRoles.includes(assignment_role)) {
        return res.status(400).json({ error: "Vai trò không hợp lệ!" });
      }
    }

    const updated = await prisma.classLeaderAssignment.update({
      where: { id },
      data: {
        ...(user_id !== undefined && { user_id: Number(user_id) }),
        ...(assignment_role !== undefined && { assignment_role }),
        ...(class_name !== undefined && { class_name }),
      },
      include: {
        user: { select: { id: true, full_name: true, role: true } },
        schoolYear: { select: { id: true, name: true } },
      },
    });

    return res.json({
      message: "Cập nhật phân công thành công!",
      data: updated,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({
          error:
            "Trưởng/Sour này đã được phân công vào lớp khác. Vui lòng thử lại sau!",
        });
    }
    return res.status(50).json({ error: "Cập nhật phân công thất bại!" });
  }
};
