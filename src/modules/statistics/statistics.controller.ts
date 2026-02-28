import { Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";

export const getDashboardStatistics = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // ✅ Dùng classFilter từ filterByClass middleware
    // null = xem tất cả, string = chỉ xem lớp đó (TRUONG_LOP)
    const classFilter = req.classFilter;
    const studentWhere = {
      is_active: true,
      ...(classFilter ? { class_name: classFilter } : {}),
    };

    const totalStudents = await prisma.student.count({ where: studentWhere });

    const totalCheckins = await prisma.checkin.count({
      where: classFilter ? { student: { class_name: classFilter } } : {},
    });

    const todayCheckins = await prisma.checkin.count({
      where: {
        checkin_date: { gte: today },
        ...(classFilter ? { student: { class_name: classFilter } } : {}),
      },
    });

    // Thống kê theo lớp
    const classes = await prisma.student.groupBy({
      by: ["class_name"],
      where: studentWhere,
      _count: { id: true },
    });

    const classStats = await Promise.all(
      classes.map(async (cls) => {
        const todayClassCheckins = await prisma.checkin.count({
          where: {
            checkin_date: { gte: today },
            student: { class_name: cls.class_name },
          },
        });

        return {
          class_name: cls.class_name,
          total_students: cls._count.id,
          today_checkins: todayClassCheckins,
        };
      }),
    );

    return res.json({
      total_students: totalStudents,
      total_checkins: totalCheckins,
      today_checkins: todayCheckins,
      classes: classStats,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
