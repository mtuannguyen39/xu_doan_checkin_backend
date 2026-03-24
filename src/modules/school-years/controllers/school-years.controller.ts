import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import { AuthRequest } from "../../../middleware/auth.middleware";

// GET /api/school-years -- lấy tất cả các năm học
export const getAllSchoolYears = async (req: Request, res: Response) => {
  try {
    const years = await prisma.schoolYear.findMany({
      orderBy: { start_year: "desc" },
    });
    return res.json(years);
  } catch (error) {
    console.error("Lấy danh sách năm học thất bại: ", error);
    return res.status(500).json({ error: "Lấy danh sách năm học thất bại!" });
  }
};

// POST /api/school-years -- tạo năm học mới (SUPER_ADMIN)
export const createSchoolYear = async (req: AuthRequest, res: Response) => {
  try {
    const { name, start_year, end_year } = req.body;
    if (!name || !start_year || !end_year) {
      return res.status(400).json({ error: "Thiếu thông tin năm học" });
    }

    const year = await prisma.schoolYear.create({
      data: { name, start_year, end_year },
    });
    return res
      .status(201)
      .json({ message: "Tạo năm học thành công!", data: year });
  } catch (error: any) {
    if (error.code === "P2002")
      return res.status(409).json({ error: "Năm học đã tồn tại!" });
    return res.status(500).json({ error: "Tạo năm học thất bại!" });
  }
};

// PUT /api/school-year/:id -- cập nhật thông tin năm học (SUPER_ADMIN)
export const updateSchoolYear = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);
    const { name, start_year, end_year } = req.body;

    const year = await prisma.schoolYear.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(start_year !== undefined && { start_year }),
        ...(end_year !== undefined && { end_year }),
      },
    });
    return res.json({ message: "Cập nhật năm học thành công!", data: year });
  } catch (error) {
    console.error("Cập nhật năm học thất bại: ", error);
    return res.status(500).json({ error: "Cập nhật năm học thất bại!" });
  }
};

// PUT /api/school-years/:id/set-active -- đặt làm năm học hiện tại (SUPER_ADMIN)
// Chỉ 1 năm học được active tại 1 thời điểm
export const setActiveSchoolYear = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    // Tắt tất cả, bật cái được chọn
    await prisma.$transaction([
      prisma.schoolYear.updateMany({ data: { is_active: false } }),
      prisma.schoolYear.update({ where: { id }, data: { is_active: true } }),
    ]);

    const year = await prisma.schoolYear.findUnique({ where: { id } });
    return res.json({ message: "Đã đặt năm học hiện tại!", data: year });
  } catch (error) {
    console.error("Cập nhật năm học thất bại: ", error);
    return res.status(500).json({ error: "Cập nhật năm học thất bại!" });
  }
};

// DELETE /api/school-year-/:id -- xóa năm học (SUPER_ADMIN, chỉ khi chưa có dữ liệu trong bảng)
export const deleteSchoolYear = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    const scoreCount = await prisma.academicScore.count({
      where: { school_year_id: id },
    });
    if (scoreCount > 0) {
      return res.status(409).json({
        error: "Không thể xóa năm học đã có dữ liệu điểm!",
      });
    }

    await prisma.schoolYear.delete({ where: { id } });
    return res.json({ message: "Xóa năm học thành công!" });
  } catch (error) {
    return res.status(500).json({ error: "Xóa năm học thất bại!" });
  }
};
