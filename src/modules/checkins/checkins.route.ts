import express from "express";
import {
  scanQRCheckin,
  createCheckin,
  getCheckinHistory,
  getStudentStats,
  updateCheckinPoint,
} from "./checkins.controller";
import { verifyToken } from "../../middleware/auth.middleware";
import { requireRole } from "../../middleware/rbac.middleware";

const router = express.Router();

const allRoles = [
  "TRUONG_LOP",
  "TRUONG_TRUC",
  "XU_DOAN_PHO",
  "XU_DOAN_TRUONG",
  "SUPER_ADMIN",
] as const;

// ✅ Route quét QR — frontend gọi POST /api/checkins/scan
router.post("/scan", verifyToken, scanQRCheckin);

// Tạo checkin thủ công (có activities)
router.post("/", verifyToken, createCheckin);

router.get("/history/:student_id", getCheckinHistory);
router.get("/stats/:student_id", getStudentStats);

router.patch(
  "/:checkin_id/point",
  verifyToken,
  requireRole(...allRoles),
  updateCheckinPoint,
);

export default router;
