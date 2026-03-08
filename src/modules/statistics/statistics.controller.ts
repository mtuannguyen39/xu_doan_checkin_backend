import { Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";

// ============================================================
// GET /api/statistics/dashboard — trang chủ
// ============================================================
export const getDashboardStatistics = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const classFilter = req.classFilter ?? null;
    const studentWhere =
      classFilter ?
        { class_name: classFilter, is_active: true }
      : { is_active: true };

    const total_students = await prisma.student.count({ where: studentWhere });

    const now = new Date();
    const todayStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);

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
          class_name: cls.class_name,
          total_students: cls._count.id,
          today_checkins: todayCount,
        };
      }),
    );

    classes.sort((a, b) => a.class_name.localeCompare(b.class_name));

    return res.json({
      total_students,
      today_checkins,
      total_checkins,
      classes,
    });
  } catch (error) {
    console.error("Dashboard statistics error:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch dashboard statistics" });
  }
};

// ============================================================
// GET /api/statistics — trang Statistics đầy đủ
// ============================================================
export const getFullStatistics = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const classFilter = req.classFilter ?? null;
    const studentWhere =
      classFilter ?
        { class_name: classFilter, is_active: true }
      : { is_active: true };
    const checkinWhere =
      classFilter ? { student: { class_name: classFilter } } : {};

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
      totalStudents > 0 && totalSessions > 0 ?
        Math.round((totalCheckins / (totalStudents * totalSessions)) * 100)
      : 0;

    const pointBreakdown = await prisma.checkin.groupBy({
      by: ["total_point"],
      where: checkinWhere,
      _count: true,
    });
    const onTimeCount =
      pointBreakdown.find((b) => b.total_point === 5)?._count ?? 0;
    const late2Count =
      pointBreakdown.find((b) => b.total_point === 2)?._count ?? 0;
    const late0Count =
      pointBreakdown.find((b) => b.total_point === 0)?._count ?? 0;

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
          cls._count.id > 0 && totalSessions > 0 ?
            Math.round((checkinCount / (cls._count.id * totalSessions)) * 100)
          : 0;
        return {
          class_name: cls.class_name,
          total_students: cls._count.id,
          total_checkins: checkinCount,
          total_points: pointAgg._sum?.total_point ?? 0,
          on_time_count: onTimeAgg,
          on_time_rate:
            checkinCount > 0 ? Math.round((onTimeAgg / checkinCount) * 100) : 0,
          attendance_rate: attendRate,
        };
      }),
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
          date: checkin_date,
          total: count,
          on_time: onTime,
          rate:
            totalStudents > 0 ? Math.round((count / totalStudents) * 100) : 0,
          on_time_rate: count > 0 ? Math.round((onTime / count) * 100) : 0,
        };
      }),
    );

    return res.json({
      overview: {
        total_students: totalStudents,
        total_sessions: totalSessions,
        total_checkins: totalCheckins,
        total_points: totalPoints,
        avg_attendance_rate: avgAttendanceRate,
        on_time_rate:
          totalCheckins > 0 ?
            Math.round((onTimeCount / totalCheckins) * 100)
          : 0,
        late_2pts_rate:
          totalCheckins > 0 ?
            Math.round((late2Count / totalCheckins) * 100)
          : 0,
        late_0pts_rate:
          totalCheckins > 0 ?
            Math.round((late0Count / totalCheckins) * 100)
          : 0,
        on_time_count: onTimeCount,
        late_2_count: late2Count,
        late_0_count: late0Count,
      },
      class_stats: classStats,
      recent_sessions: recentSessions.reverse(),
    });
  } catch (error) {
    console.error("Full statistics error:", error);
    return res.status(500).json({ error: "Failed to fetch statistics" });
  }
};

const ALLOWED_ROLES = [
  "SUPER_ADMIN",
  "XU_DOAN_TRUONG",
  "XU_DOAN_PHO",
  "TRUONG_TRUC",
];

export const exportAllClasses = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });
    if (!ALLOWED_ROLES.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Bạn không có quyền export toàn đoàn!" });
    }

    // Tất cả lớp + học sinh + checkin
    const allStudents = await prisma.student.findMany({
      include: {
        checkins: { orderBy: { checkin_date: "desc" } },
      },
      orderBy: [{ class_name: "asc" }, { id: "asc" }],
    });

    // Tổng hợp theo lớp
    const classMap = new Map<
      string,
      {
        class_name: string;
        nganh: string;
        students: typeof allStudents;
      }
    >();

    for (const s of allStudents) {
      if (!classMap.has(s.class_name)) {
        classMap.set(s.class_name, {
          class_name: s.class_name,
          nganh: s.nganh,
          students: [],
        });
      }
      classMap.get(s.class_name)!.students.push(s);
    }

    // Tổng số buổi điểm danh (tất cả lớp)
    const allDates = await prisma.checkin.findMany({
      select: { checkin_date: true },
      distinct: ["checkin_date"],
      orderBy: { checkin_date: "desc" },
    });
    const totalSessions = allDates.length;

    // Build danh sách lớp tổng quan
    const classStats = Array.from(classMap.values()).map((cls, idx) => {
      const totalStudents = cls.students.length;
      const totalCheckins = cls.students.reduce(
        (s, st) => s + st.checkins.length,
        0,
      );
      const totalPoints = cls.students.reduce(
        (s, st) =>
          s + st.checkins.reduce((a, c) => a + (c.total_point ?? 0), 0),
        0,
      );
      const avgRate =
        totalSessions > 0 && totalStudents > 0 ?
          Math.round((totalCheckins / (totalSessions * totalStudents)) * 100)
        : 0;

      return {
        stt: idx + 1,
        class_name: cls.class_name,
        nganh: cls.nganh,
        total_students: totalStudents,
        total_sessions: totalSessions,
        avg_rate: avgRate,
        total_points: totalPoints,
      };
    });

    // Build danh sách học sinh (tất cả lớp)
    const studentRows = allStudents.map((s, idx) => {
      const totalCheckins = s.checkins.length;
      const totalPoints = s.checkins.reduce(
        (a, c) => a + (c.total_point ?? 0),
        0,
      );
      const onTime = s.checkins.filter(
        (c) => (c.total_point ?? 0) === 5,
      ).length;
      const late2 = s.checkins.filter((c) => (c.total_point ?? 0) === 2).length;
      const late0 = s.checkins.filter((c) => (c.total_point ?? 0) === 0).length;
      const rate =
        totalSessions > 0 ?
          Math.round((totalCheckins / totalSessions) * 100)
        : 0;

      return {
        stt: idx + 1,
        id: s.id,
        full_name: s.full_name,
        saint_name: s.saint_name,
        class_name: s.class_name,
        nganh: s.nganh,
        phone: s.phone ?? "",
        is_active: s.is_active,
        total_checkins: totalCheckins,
        total_points: totalPoints,
        on_time: onTime,
        late_2pts: late2,
        late_0pts: late0,
        attendance_rate: rate,
      };
    });

    // Session summary (8 buổi gần nhất)
    const sessionSummary = await Promise.all(
      allDates.slice(0, 8).map(async ({ checkin_date }) => {
        const dayCheckins = await prisma.checkin.findMany({
          where: { checkin_date },
          select: { total_point: true },
        });
        const totalStudentsAll = allStudents.length;
        return {
          date: checkin_date,
          total: dayCheckins.length,
          on_time: dayCheckins.filter((c) => (c.total_point ?? 0) === 5).length,
          late_2: dayCheckins.filter((c) => (c.total_point ?? 0) === 2).length,
          late_0: dayCheckins.filter((c) => (c.total_point ?? 0) === 0).length,
          absent: totalStudentsAll - dayCheckins.length,
        };
      }),
    );

    return res.json({
      meta: {
        scope: "all",
        total_students: allStudents.length,
        total_sessions: totalSessions,
        total_classes: classMap.size,
        exported_at: new Date().toISOString(),
      },
      class_stats: classStats,
      students: studentRows,
      session_summary: sessionSummary,
    });
  } catch (error) {
    console.error("Export all failed:", error);
    return res.status(500).json({ error: "Export thất bại!" });
  }
};
