import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";

// ============================================================
// 🏆 BẢNG XẾP HẠNG ĐIỂM SỐ
// ============================================================
export const getLeaderboard = async (req: AuthRequest, res: Response) => {
  try {
    const { nganh, limit = "20" } = req.query;
    const classFilter = req.classFilter;

    // Chỉ nhận class_name từ query nếu không bị filter bởi middleware
    const queryClass = req.query["class_name"];
    const classFromQuery = queryClass ? String(queryClass) : undefined;

    const whereCondition: any = { is_active: true };
    if (classFilter) {
      whereCondition.class_name = classFilter;
    } else if (classFromQuery) {
      whereCondition.class_name = classFromQuery;
    }
    if (nganh) whereCondition.nganh = String(nganh);

    const students = await prisma.student.findMany({
      where: whereCondition,
      include: {
        checkins: { select: { total_point: true, checkin_date: true } },
      },
    });

    const result = students.map((student) => {
      const totalPoints = student.checkins.reduce(
        (sum, c) => sum + c.total_point,
        0,
      );
      return {
        id: student.id,
        full_name: student.full_name,
        saint_name: student.saint_name,
        class_name: student.class_name,
        nganh: student.nganh,
        total_point: totalPoints,
        total_checkins: student.checkins.length,
      };
    });

    result.sort((a, b) => b.total_point - a.total_point);

    const ranked = result.slice(0, parseInt(String(limit), 10)).map((s, i) => ({
      rank: i + 1,
      ...s,
    }));

    return res.json({
      data: ranked,
      total: result.length,
      filters: {
        class_name: classFilter || classFromQuery || null,
        nganh: nganh ? String(nganh) : null,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ============================================================
// 📊 BẢNG XẾP HẠNG CHUYÊN CẦN
// ============================================================
export const getAttendanceLeaderboard = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { nganh, limit = "20" } = req.query;
    const classFilter = req.classFilter;

    const queryClass = req.query["class_name"];
    const classFromQuery = queryClass ? String(queryClass) : undefined;

    const whereCondition: any = { is_active: true };
    if (classFilter) {
      whereCondition.class_name = classFilter;
    } else if (classFromQuery) {
      whereCondition.class_name = classFromQuery;
    }
    if (nganh) whereCondition.nganh = String(nganh);

    const totalSessions = await prisma.checkin.groupBy({
      by: ["checkin_date"],
    });
    const totalSessionCount = totalSessions.length || 1;

    const students = await prisma.student.findMany({
      where: whereCondition,
      include: {
        _count: { select: { checkins: true } },
        checkins: { select: { total_point: true } },
      },
      orderBy: { checkins: { _count: "desc" } },
      take: parseInt(String(limit), 10),
    });

    const result = students.map((student, index) => {
      const totalPoints = student.checkins.reduce(
        (sum, c) => sum + c.total_point,
        0,
      );
      const attendanceRate = Math.min(
        Math.round((student._count.checkins / totalSessionCount) * 100),
        100,
      );

      return {
        rank: index + 1,
        id: student.id,
        full_name: student.full_name,
        saint_name: student.saint_name,
        class_name: student.class_name,
        nganh: student.nganh,
        total_checkins: student._count.checkins,
        total_point: totalPoints,
        attendance_rate: attendanceRate,
        total_sessions: totalSessionCount,
      };
    });

    return res.json({
      data: result,
      total_sessions: totalSessionCount,
      filters: {
        class_name: classFilter || classFromQuery || null,
        nganh: nganh ? String(nganh) : null,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ============================================================
// 🏫 DANH SÁCH LỚP
// ============================================================
export const getClasses = async (req: AuthRequest, res: Response) => {
  try {
    const classFilter = req.classFilter;
    const whereCondition: any = { is_active: true };
    if (classFilter) whereCondition.class_name = classFilter;

    const classes = await prisma.student.groupBy({
      by: ["class_name", "nganh"],
      where: whereCondition,
      _count: { id: true },
    });

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const classStats = await Promise.all(
      classes.map(async (cls) => {
        const pointAgg = await prisma.checkin.aggregate({
          where: { student: { class_name: cls.class_name } },
          _sum: { total_point: true },
          _count: { id: true },
        });

        const recentCheckins = await prisma.checkin.count({
          where: {
            student: { class_name: cls.class_name },
            checkin_date: { gte: weekAgo },
          },
        });

        return {
          class_name: cls.class_name,
          nganh: cls.nganh,
          total_students: cls._count.id,
          total_checkins: pointAgg._count.id,
          total_points: pointAgg._sum.total_point || 0,
          recent_checkins: recentCheckins,
        };
      }),
    );

    classStats.sort((a, b) => {
      if (a.nganh !== b.nganh) return a.nganh.localeCompare(b.nganh);
      return a.class_name.localeCompare(b.class_name);
    });

    return res.json({ data: classStats });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// ============================================================
// 📋 CHI TIẾT LỚP
// ============================================================
export const getClassDetail = async (req: AuthRequest, res: Response) => {
  try {
    // ✅ FIX: dùng String() để ép kiểu từ string | string[] → string
    const rawParam = req.params["class_name"];
    const class_name = String(rawParam);
    const decodedClassName = decodeURIComponent(class_name);

    const classFilter = req.classFilter;

    // TRUONG_LOP chỉ được xem lớp mình
    if (classFilter && classFilter !== decodedClassName) {
      return res
        .status(403)
        .json({ message: "Bạn chỉ có thể xem lớp của mình!" });
    }

    const classInfo = await prisma.student.groupBy({
      by: ["class_name", "nganh"],
      where: { class_name: decodedClassName },
      _count: { id: true },
    });

    if (classInfo.length === 0) {
      return res.status(404).json({ message: "Lớp không tồn tại" });
    }

    const totalSessions = await prisma.checkin.groupBy({
      by: ["checkin_date"],
    });
    const totalSessionCount = totalSessions.length || 1;

    const students = await prisma.student.findMany({
      where: { class_name: decodedClassName, is_active: true },
      include: {
        checkins: {
          include: { details: { include: { activity: true } } },
          orderBy: { checkin_date: "desc" },
        },
      },
      orderBy: { full_name: "asc" },
    });

    const studentsWithStats = students.map((student) => {
      const totalPoints = student.checkins.reduce(
        (sum, c) => sum + c.total_point,
        0,
      );
      const totalCheckins = student.checkins.length;
      const attendanceRate = Math.min(
        Math.round((totalCheckins / totalSessionCount) * 100),
        100,
      );

      const recentCheckins = student.checkins.slice(0, 5).map((c) => ({
        date: c.checkin_date,
        point: c.total_point,
        activities: c.details.map((d) => ({
          name: d.activity.name,
          point: d.point,
        })),
      }));

      const { checkins, qr_code, ...safeStudent } = student;

      return {
        ...safeStudent,
        total_checkins: totalCheckins,
        total_points: totalPoints,
        attendance_rate: attendanceRate,
        recent_checkins: recentCheckins,
      };
    });

    studentsWithStats.sort((a, b) => b.total_points - a.total_points);
    const ranked = studentsWithStats.map((s, i) => ({ rank: i + 1, ...s }));

    const classStats = {
      class_name: decodedClassName,
      nganh: classInfo[0].nganh,
      total_students: classInfo[0]._count.id,
      total_sessions: totalSessionCount,
      avg_attendance_rate:
        ranked.length > 0 ?
          Math.round(
            ranked.reduce((sum, s) => sum + s.attendance_rate, 0) /
              ranked.length,
          )
        : 0,
      total_points: ranked.reduce((sum, s) => sum + s.total_points, 0),
    };

    return res.json({ class: classStats, students: ranked });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
