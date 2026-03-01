import express from "express";
import {
  scanQRCheckin,
  createCheckin,
  getCheckinHistory,
  getStudentStats,
} from "./checkins.controller";
import { verifyToken } from "../../middleware/auth.middleware";

const router = express.Router();

// ✅ Route quét QR — frontend gọi POST /api/checkins/scan
router.post("/scan", verifyToken, scanQRCheckin);

// Tạo checkin thủ công (có activities)
router.post("/", verifyToken, createCheckin);

router.get("/history/:student_id", getCheckinHistory);
router.get("/stats/:student_id", getStudentStats);

export default router;
