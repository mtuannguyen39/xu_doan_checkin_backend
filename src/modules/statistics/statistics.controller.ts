import { Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";

// ============================================================
// GET /api/statistics/dashboard — trang chủ
// ============================================================
export const getDashboardStatistics = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const classFilter  = req.classFilter ?? null;
    const studentWhere = classFilter ? { class_name: classFilter, is_active: true } : { is_active: true };

    const total_students = await prisma.student.count({ where: studentWhere });

    const now        = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayEnd   = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);

    const today_checkins = await prisma.checkin.count({
      where: {
        checkin_date: { gte: todayStart, lt: todayEnd },
        ...(classFilter ? { student: { class_name: classFilter } } : {}),
      },
    });

    const total_checkins = await prisma.checkin.count({
      where: classFilter ? { student: { class_name: classFilter } } : {},
    });

    const classGroups = await prisma.student.groupBy({
      by: ["class_name"],
      where: studentWhere,
      _count: { id: true },
    });

    const classes = await Promise.all(
      classGroups.map(async (cls) => {
        const todayCount = await prisma.checkin.count({
          where: {
            checkin_date: { gte: todayStart, lt: todayEnd },
            student: { class_name: cls.class_name },
          },
        });
        return {
          class_name:     cls.class_name,
          total_students: cls._count.id,
          today_checkins: todayCount,
        };
      })
    );

    classes.sort((a, b) => a.class_name.localeCompare(b.class_name));

    return res.json({ total_students, today_checkins, total_checkins, classes });
  } catch (error) {
    console.error("Dashboard statistics error:", error);
    return res.status(500).json({ error: "Failed to fetch dashboard statistics" });
  }
};

// ============================================================
// GET /api/statistics — trang Statistics đầy đủ
// ============================================================
export const getFullStatistics = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const classFilter  = req.classFilter ?? null;
    const studentWhere = classFilter ? { class_name: classFilter, is_active: true } : { is_active: true };
    const checkinWhere = classFilter ? { student: { class_name: classFilter } } : {};

    const totalStudents = await prisma.student.count({ where: studentWhere });

    const allDates = await prisma.checkin.findMany({
      where: checkinWhere,
      select: { checkin_date: true },
      distinct: ["checkin_date"],
      orderBy: { checkin_date: "desc" },
    });
    const totalSessions = allDates.length;
    const totalCheckins = await prisma.checkin.count({ where: checkinWhere });

    const avgAttendanceRate =
      totalStudents > 0 && totalSessions > 0
        ? Math.round((totalCheckins / (totalStudents * totalSessions)) * 100)
        : 0;

    const pointBreakdown = await prisma.checkin.groupBy({
      by: ["total_point"],
      where: checkinWhere,
      _count: true,
    });
    const onTimeCount = pointBreakdown.find((b) => b.total_point === 10)?._count ?? 0;
    const late5Count  = pointBreakdown.find((b) => b.total_point === 5)?._count  ?? 0;
    const late0Count  = pointBreakdown.find((b) => b.total_point === 0)?._count  ?? 0;

    const totalPointsAgg = await prisma.checkin.aggregate({
      where: checkinWhere,
      _sum: { total_point: true },
    });
    const totalPoints = totalPointsAgg._sum?.total_point ?? 0;

    const byClass = await prisma.student.groupBy({
      by: ["class_name"],
      where: studentWhere,
      _count: { id: true },
    });

    const classStats = await Promise.all(
      byClass.map(async (cls) => {
        const checkinCount = await prisma.checkin.count({
          where: { student: { class_name: cls.class_name } },
        });
        const pointAgg = await prisma.checkin.aggregate({
          where: { student: { class_name: cls.class_name } },
          _sum: { total_point: true },
        });
        const onTimeAgg = await prisma.checkin.count({
          where: { student: { class_name: cls.class_name }, total_point: 10 },
        });
        const attendRate =
          cls._count.id > 0 && totalSessions > 0
            ? Math.round((checkinCount / (cls._count.id * totalSessions)) * 100)
            : 0;
        return {
          class_name:      cls.class_name,
          total_students:  cls._count.id,
          total_checkins:  checkinCount,
          total_points:    pointAgg._sum?.total_point ?? 0,
          on_time_count:   onTimeAgg,
          on_time_rate:    checkinCount > 0 ? Math.round((onTimeAgg / checkinCount) * 100) : 0,
          attendance_rate: attendRate,
        };
      })
    );
    classStats.sort((a, b) => b.attendance_rate - a.attendance_rate);

    const recentSessions = await Promise.all(
      allDates.slice(0, 7).map(async ({ checkin_date }) => {
        const count = await prisma.checkin.count({
          where: { checkin_date, ...checkinWhere },
        });
        const onTime = await prisma.checkin.count({
          where: { checkin_date, total_point: 10, ...checkinWhere },
        });
        return {
          date:         checkin_date,
          total:        count,
          on_time:      onTime,
          rate:         totalStudents > 0 ? Math.round((count / totalStudents) * 100) : 0,
          on_time_rate: count > 0 ? Math.round((onTime / count) * 100) : 0,
        };
      })
    );

    return res.json({
      overview: {
        total_students:      totalStudents,
        total_sessions:      totalSessions,
        total_checkins:      totalCheckins,
        total_points:        totalPoints,
        avg_attendance_rate: avgAttendanceRate,
        on_time_rate:        totalCheckins > 0 ? Math.round((onTimeCount / totalCheckins) * 100) : 0,
        late_5pts_rate:      totalCheckins > 0 ? Math.round((late5Count  / totalCheckins) * 100) : 0,
        late_0pts_rate:      totalCheckins > 0 ? Math.round((late0Count  / totalCheckins) * 100) : 0,
        on_time_count:       onTimeCount,
        late_5_count:        late5Count,
        late_0_count:        late0Count,
      },
      class_stats:     classStats,
      recent_sessions: recentSessions.reverse(),
    });
  } catch (error) {
    console.error("Full statistics error:", error);
    return res.status(500).json({ error: "Failed to fetch statistics" });
  }
};