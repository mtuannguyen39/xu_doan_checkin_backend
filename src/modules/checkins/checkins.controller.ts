import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";
import { validate as uuidValidate } from "uuid";
import { calculateCheckinPoint } from "../../utils/calculateCheckinPoint";

interface ScanQRRequest {
  qr_code: string;
}
interface CheckinRequest {
  student_id: string;
  checked_by: number;
  activities: number[];
}
interface StudentParams {
  student_id: string;
}

// ============================================================
// Helper: lấy ngày đúng theo giờ Việt Nam
// Tránh bug: server UTC thấy 23:50 05/03 khi VN đang là 06:50 sáng 06/03
// ============================================================
function getVietnamDate(now: Date): Date {
  const vnDateStr = now.toLocaleDateString("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
  }); // → "2025-03-06"
  return new Date(vnDateStr + "T00:00:00.000Z");
}

// ============================================================
// Helper: kiểm tra có phải Chủ nhật theo giờ VN không
// getDay() = 0 là Chủ nhật
// ============================================================
function isVietnamSunday(now: Date): boolean {
  const vnDay = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }),
  ).getDay();
  return vnDay === 0;
}

// ============================================================
// POST /api/checkins/scan
// ============================================================
export const scanQRCheckin = async (req: AuthRequest, res: Response) => {
  try {
    const { qr_code } = req.body as ScanQRRequest;

    if (!qr_code || !uuidValidate(qr_code)) {
      return res.status(400).json({ error: "Mã QR không hợp lệ!" });
    }

    const student = await prisma.student.findUnique({ where: { qr_code } });
    if (!student)
      return res.status(404).json({ error: "Không tìm thấy thiếu nhi!" });
    if (!student.is_active)
      return res
        .status(400)
        .json({ error: "Tài khoản thiếu nhi đã bị vô hiệu hóa!" });
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    if (
      req.user.role === "TRUONG_LOP" &&
      student.class_name !== req.user.class_name
    ) {
      return res.status(403).json({
        message: "Bạn chỉ có quyền checkin cho Thiếu nhi ở trong lớp!",
      });
    }

    const now = new Date();

    // ✅ FIX: ngày theo giờ VN, không dùng getFullYear/Month/Date của server UTC
    const checkDate = getVietnamDate(now);

    const existing = await prisma.checkin.findUnique({
      where: {
        student_id_checkin_date: {
          student_id: student.id,
          checkin_date: checkDate,
        },
      },
    });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Thiếu nhi đã được điểm danh Chủ nhật này rồi!" });
    }

    const total_point = calculateCheckinPoint(now);
    const timeLabel =
      total_point === 5 ? "Đúng giờ ✅"
      : total_point === 2 ? "Trễ nhẹ ⚠️"
      : "Trễ ❌";

    const checkin = await prisma.checkin.create({
      data: {
        student_id: student.id,
        checked_by: req.user.id,
        checkin_date: checkDate,
        total_point,
      },
      include: {
        student: true,
        leader: { select: { id: true, full_name: true } },
      },
    });

    return res.status(201).json({
      message: `Điểm danh thành công! ${timeLabel} (+${total_point} điểm)`,
      data: { ...checkin, point_earned: total_point, time_label: timeLabel },
    });
  } catch (error) {
    console.error("Checkin failed:", error);
    return res.status(500).json({ error: "Điểm danh thất bại!" });
  }
};

// ============================================================
// POST /api/checkins
// ============================================================
export const createCheckin = async (req: AuthRequest, res: Response) => {
  try {
    const { student_id, activities } = req.body as CheckinRequest;
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    if (!student_id || !activities || activities.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const now = new Date();

    const checkDate = getVietnamDate(now);

    const existing = await prisma.checkin.findUnique({
      where: {
        student_id_checkin_date: { student_id, checkin_date: checkDate },
      },
    });
    if (existing)
      return res.status(400).json({ message: "Already checked in today" });

    const activityData = await prisma.activity.findMany({
      where: { id: { in: activities }, is_active: true },
    });
    if (!activityData || activityData.length === 0) {
      return res.status(404).json({ error: "No valid activities found" });
    }

    const totalPoint = activityData.reduce(
      (sum: any, act: any) => sum + act.point,
      0,
    );

    const checkin = await prisma.checkin.create({
      data: {
        student_id,
        checked_by: req.user.id,
        checkin_date: checkDate,
        total_point: totalPoint,
        details: {
          create: activityData.map((act: any) => ({
            activity_id: act.id,
            point: act.point,
          })),
        },
      },
      include: {
        details: { include: { activity: true } },
        student: true,
      },
    });

    return res.status(201).json(checkin);
  } catch (error) {
    console.error("Checkin failed:", error);
    return res.status(500).json({
      error: "Checkin failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// ============================================================
// GET /api/checkins/:student_id/history
// ============================================================
export const getCheckinHistory = async (
  req: Request<StudentParams>,
  res: Response,
) => {
  try {
    const { student_id } = req.params;
    const checkins = await prisma.checkin.findMany({
      where: { student_id },
      include: {
        details: { include: { activity: true } },
        leader: { select: { id: true, full_name: true } },
      },
      orderBy: { checkin_date: "desc" },
    });
    return res.json(checkins);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch checkin history" });
  }
};

// ============================================================
// GET /api/checkins/:student_id/stats
// ============================================================
export const getStudentStats = async (
  req: Request<StudentParams>,
  res: Response,
) => {
  try {
    const { student_id } = req.params;
    const stats = await prisma.checkin.aggregate({
      where: { student_id },
      _sum: { total_point: true },
      _count: true,
    });

    const breakdown = await prisma.checkin.groupBy({
      by: ["total_point"],
      where: { student_id },
      _count: true,
    });

    const onTime = breakdown.find((b) => b.total_point === 5)?._count ?? 0;
    const late2 = breakdown.find((b) => b.total_point === 2)?._count ?? 0;
    const late0 = breakdown.find((b) => b.total_point === 0)?._count ?? 0;

    return res.json({
      student_id,
      total_points: stats._sum?.total_point ?? 0,
      total_checkins: stats._count ?? 0,
      breakdown: { on_time: onTime, late_2pts: late2, late_0pts: late0 },
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch student stats" });
  }
};

import { Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";

const VALID_POINTS = [0, 2, 5]; // Các mức điểm hợp lệ
const ALLOWED_ROLES = ["SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO", "TRUONG_TRUC", "TRUONG_LOP"];

export const updateCheckinPoint = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    const { role, class_name: userClass } = req.user;
    const checkinId = parseInt(String(req.params["checkin_id"]), 10);
    const { point, reason } = req.body as { point: number; reason?: string };

    if (!ALLOWED_ROLES.includes(role)) {
      return res.status(403).json({ error: "Bạn không có quyền chỉnh sửa điểm!" });
    }

    if (!VALID_POINTS.includes(point)) {
      return res.status(400).json({
        error: `Điểm không hợp lệ! Chỉ chấp nhận: ${VALID_POINTS.join(", ")}`,
      });
    }

    if (isNaN(checkinId)) {
      return res.status(400).json({ error: "ID điểm danh không hợp lệ!" });
    }

    // Lấy checkin kèm thông tin student
    const checkin = await prisma.checkin.findUnique({
      where:   { id: checkinId },
      include: { student: true },
    });

    if (!checkin) {
      return res.status(404).json({ error: "Không tìm thấy bản ghi điểm danh!" });
    }

    // TRUONG_LOP chỉ sửa được lớp mình
    if (role === "TRUONG_LOP" && checkin.student.class_name !== userClass) {
      return res.status(403).json({
        error: "Bạn chỉ có thể chỉnh sửa điểm của thiếu nhi trong lớp mình!",
      });
    }

    const oldPoint = checkin.total_point;

    const updated = await prisma.checkin.update({
      where: { id: checkinId },
      data:  { total_point: point },
      include: {
        student: { select: { id: true, full_name: true, class_name: true } },
        leader:  { select: { id: true, full_name: true } },
      },
    });

    const pointLabel = point === 5 ? "Đúng giờ" : point === 2 ? "Trễ nhẹ" : "Trễ";

    return res.json({
      message: `Đã cập nhật điểm: ${oldPoint} → ${point} (${pointLabel})`,
      data: {
        checkin_id:  updated.id,
        student:     updated.student,
        old_point:   oldPoint,
        new_point:   point,
        point_label: pointLabel,
        updated_by:  updated.leader,
        reason:      reason ?? "",
      },
    });
  } catch (error) {
    console.error("Update checkin point failed:", error);
    return res.status(500).json({ error: "Cập nhật điểm thất bại!" });
  }
};