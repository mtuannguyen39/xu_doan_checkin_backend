import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { AuthRequest } from "../../middleware/auth.middleware";
import { validate as uuidValidate } from "uuid";

interface ScanQRRequest {
  qr_code: string;
}

interface CheckinRequest {
  student_id: string;
  checked_by: number;
  activities: number[]; // Array of activity IDs
}

interface StudentParams {
  student_id: string;
}

export const scanQRCheckin = async (req: AuthRequest, res: Response) => {
  try {
    const { qr_code } = req.body as ScanQRRequest;

    if (!qr_code || !uuidValidate(qr_code)) {
      return res.status(400).json({ error: "Invalid QR code" });
    }
    const student = await prisma.student.findUnique({
      where: { qr_code },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    if (!student.is_active) {
      return res.status(400).json({ error: "Student is not active" });
    }

    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    if (req.user.role === "TRUONG_LOP") {
      if (student.class_name !== req.user.class_name) {
        return res.status(403).json({
          message: "Bạn chỉ có quyền checkin cho Thiếu nhi ở trong lớp",
        });
      }
    }

    const today = new Date();
    const checkDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const existing = await prisma.checkin.findUnique({
      where: {
        student_id_checkin_date: {
          student_id: student.id,
          checkin_date: checkDate,
        },
      },
    });

    if (existing) {
      return res.status(400).json({
        message: "Student already checked in today",
      });
    }

    const checkin = await prisma.checkin.create({
      data: {
        student_id: student.id,
        checked_by: req.user.id,
        checkin_date: checkDate,
        total_point: 0,
      },
      include: {
        student: true,
        leader: {
          select: {
            id: true,
            full_name: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Checkin successful",
      data: checkin,
    });
  } catch (error) {
    console.error("Checkin failed:", error);
    res.status(500).json({ error: "Checkin failed" });
  }
};

export const createCheckin = async (req: AuthRequest, res: Response) => {
  try {
    const { student_id, activities } = req.body as CheckinRequest;
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });
    const checked_by = req.user.id;

    // Validate input
    if (!student_id || !checked_by || !activities || activities.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const today = new Date();
    const checkDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    const existing = await prisma.checkin.findUnique({
      where: {
        student_id_checkin_date: {
          student_id,
          checkin_date: checkDate,
        },
      },
    });

    if (existing) {
      return res.status(400).json({ message: "Already checked in today" });
    }

    const activityData = await prisma.activity.findMany({
      where: {
        id: { in: activities },
        is_active: true,
      },
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
        checked_by,
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
        details: {
          include: {
            activity: true,
          },
        },
        student: true,
      },
    });

    res.status(201).json(checkin);
  } catch (error) {
    console.error("Checkin failed:", error);
    res.status(500).json({
      error: "Checkin failed",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// ✅ Fix: Thêm type cho params
export const getCheckinHistory = async (
  req: Request<StudentParams>,
  res: Response,
) => {
  try {
    const { student_id } = req.params;

    const checkins = await prisma.checkin.findMany({
      where: { student_id },
      include: {
        details: {
          include: {
            activity: true,
          },
        },
        leader: {
          select: {
            id: true,
            full_name: true,
          },
        },
      },
      orderBy: {
        checkin_date: "desc",
      },
    });

    res.json(checkins);
  } catch (error) {
    console.error("Error fetching checkin history:", error);
    res.status(500).json({ error: "Failed to fetch checkin history" });
  }
};

// ✅ Fix: Sửa aggregate
export const getStudentStats = async (
  req: Request<StudentParams>,
  res: Response,
) => {
  try {
    const { student_id } = req.params;

    const stats = await prisma.checkin.aggregate({
      where: { student_id },
      _sum: {
        total_point: true,
      },
      _count: true, // ✅ Đổi từ { id: true } thành true
    });

    res.json({
      student_id,
      total_points: stats._sum?.total_point ?? 0, // ✅ Dùng optional chaining
      total_checkins: stats._count ?? 0, // ✅ _count là number khi set true
    });
  } catch (error) {
    console.error("Error fetching student stats:", error);
    res.status(500).json({ error: "Failed to fetch student stats" });
  }
};
