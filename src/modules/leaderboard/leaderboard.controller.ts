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
        checkin_id: c.id,
        date: c.checkin_date,
        checkin_tiem: c.created_at,
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

// DELETE CLASS
//chỉ có SUPER_ADMIN mới được xóa
export const deleteClass = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    if (req.user.role !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ error: "Chỉ Super Admin mới có thể xóa lớp!" });
    }

    const class_name = decodeURIComponent(String(req.params["class_name"]));

    // Kiểm tra lớp có tồn tại không
    const studentCount = await prisma.student.count({ where: { class_name } });
    if (studentCount === 0) {
      return res
        .status(404)
        .json({ error: "Lớp không tồn tại hoặc đã không có học sinh!" });
    }

    // Lấy tất cả student IDs trong lớp
    const students = await prisma.student.findMany({
      where: { class_name },
      select: { id: true },
    });
    const studentIds = students.map((s) => s.id);

    // Xóa theo thứ tự tránh foreign key constraint
    await prisma.checkinDetail.deleteMany({
      where: { checkin: { student_id: { in: studentIds } } },
    });
    await prisma.checkin.deleteMany({
      where: { student_id: { in: studentIds } },
    });
    await prisma.student.deleteMany({ where: { class_name } });

    return res.json({
      message: `Đã xóa lớp "${class_name}" và ${studentCount} thiếu nhi thành công!`,
      deleted_students: studentCount,
    });
  } catch (error) {
    console.error("Error deleting class:", error);
    return res.status(500).json({ error: "Xóa lớp thất bại!" });
  }
};

export const exportClassData = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const className = decodeURIComponent(String(req.params["class_name"]));
    const { role, class_name: userClass } = req.user;

    // TRUONG_LOP chỉ export lớp mình
    if (role === "TRUONG_LOP" && userClass !== className) {
      return res
        .status(403)
        .json({ error: "Bạn chỉ có thể export lớp của mình!" });
    }

    // Lấy tất cả học sinh trong lớp
    const students = await prisma.student.findMany({
      where: { class_name: className },
      include: {
        checkins: {
          orderBy: { checkin_date: "desc" },
          take: 50, // tối đa 50 buổi gần nhất
        },
      },
      orderBy: { id: "asc" },
    });

    if (students.length === 0) {
      return res
        .status(404)
        .json({ error: "Lớp không tồn tại hoặc chưa có học sinh!" });
    }

    // Tất cả ngày điểm danh duy nhất của lớp (để tính tổng buổi)
    const allDates = await prisma.checkin.findMany({
      where: { student: { class_name: className } },
      select: { checkin_date: true },
      distinct: ["checkin_date"],
      orderBy: { checkin_date: "desc" },
    });
    const totalSessions = allDates.length;

    // Build dữ liệu từng học sinh
    const studentRows = students.map((s, idx) => {
      const totalCheckins = s.checkins.length;
      const totalPoints = s.checkins.reduce(
        (sum, c) => sum + (c.total_point ?? 0),
        0,
      );
      const onTimeCount = s.checkins.filter(
        (c) => (c.total_point ?? 0) === 5,
      ).length;
      const late2Count = s.checkins.filter(
        (c) => (c.total_point ?? 0) === 2,
      ).length;
      const late0Count = s.checkins.filter(
        (c) => (c.total_point ?? 0) === 0,
      ).length;
      const attendRate =
        totalSessions > 0 ?
          Math.round((totalCheckins / totalSessions) * 100)
        : 0;

      return {
        stt: idx + 1,
        id: s.id,
        full_name: s.full_name,
        saint_name: s.saint_name,
        phone: s.phone ?? "",
        is_active: s.is_active,
        total_checkins: totalCheckins,
        total_points: totalPoints,
        on_time: onTimeCount,
        late_2pts: late2Count,
        late_0pts: late0Count,
        attendance_rate: attendRate,
        // 8 buổi gần nhất dưới dạng cột riêng
        recent_sessions: allDates.slice(0, 8).map(({ checkin_date }) => {
          const c = s.checkins.find((ch) =>
            ch.checkin_date
              .toISOString()
              .startsWith(checkin_date.toISOString().substring(0, 10)),
          );
          return {
            date: checkin_date,
            point: c ? (c.total_point ?? 0) : null, // null = vắng
          };
        }),
      };
    });

    // Session summary (8 buổi gần nhất)
    const sessionSummary = await Promise.all(
      allDates.slice(0, 8).map(async ({ checkin_date }) => {
        const dayCheckins = await prisma.checkin.findMany({
          where: { checkin_date, student: { class_name: className } },
          select: { total_point: true },
        });
        return {
          date: checkin_date,
          total: dayCheckins.length,
          on_time: dayCheckins.filter((c) => (c.total_point ?? 0) === 5).length,
          late_2: dayCheckins.filter((c) => (c.total_point ?? 0) === 2).length,
          late_0: dayCheckins.filter((c) => (c.total_point ?? 0) === 0).length,
          absent: students.length - dayCheckins.length,
        };
      }),
    );

    return res.json({
      meta: {
        class_name: className,
        total_students: students.length,
        total_sessions: totalSessions,
        exported_at: new Date().toISOString(),
        nganh: students[0]?.nganh ?? "",
      },
      students: studentRows,
      session_summary: sessionSummary,
      recent_dates: allDates.slice(0, 8).map((d) => d.checkin_date),
    });
  } catch (error) {
    console.error("Export error:", error);
    return res.status(500).json({ error: "Export thất bại!" });
  }
};
