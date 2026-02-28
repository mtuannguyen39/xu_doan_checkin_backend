import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

// 📌 1. Tổng quan dashboard
export const getDashboardStatistics = async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Tổng học sinh
    const totalStudents = await prisma.student.count({
      where: { is_active: true },
    });

    // Tổng checkin
    const totalCheckins = await prisma.checkin.count();

    // Checkin hôm nay
    const todayCheckins = await prisma.checkin.count({
      where: {
        checkin_date: {
          gte: today,
        },
      },
    });

    // 📌 Thống kê theo lớp
    const classes = await prisma.student.groupBy({
      by: ["class_name"],
      where: { is_active: true },
      _count: {
        id: true,
      },
    });

    // Lấy checkin hôm nay theo từng lớp
    const classStats = await Promise.all(
      classes.map(async (cls) => {
        const todayClassCheckins = await prisma.checkin.count({
          where: {
            checkin_date: {
              gte: today,
            },
            student: {
              class_name: cls.class_name,
            },
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
