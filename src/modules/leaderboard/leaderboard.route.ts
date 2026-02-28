import { Router } from "express";
import {
  getLeaderboard,
  getAttendanceLeaderboard,
  getClasses,
  getClassDetail,
} from "./leaderboard.controller";
import { verifyToken } from "../../middleware/auth.middleware";
import {
  requirePermission,
  requireAnyPermission,
  filterByClass,
} from "../../middleware/rbac.middleware";

const router = Router();

// 🏆 Bảng xếp hạng điểm số
router.get(
  "/points",
  verifyToken,
  requirePermission("leaderboard:read"),
  filterByClass,
  getLeaderboard,
);

// 📊 Bảng xếp hạng chuyên cần
router.get(
  "/attendance",
  verifyToken,
  requirePermission("leaderboard:read"),
  filterByClass,
  getAttendanceLeaderboard,
);

// 🏫 Danh sách lớp — TRUONG_LOP có "classes:read_own", các role khác có "classes:read"
router.get(
  "/classes",
  verifyToken,
  requireAnyPermission("classes:read", "classes:read_own"),
  filterByClass,
  getClasses,
);

// 📋 Chi tiết lớp
router.get(
  "/classes/:class_name",
  verifyToken,
  requireAnyPermission("classes:read", "classes:read_own"),
  filterByClass,
  getClassDetail,
);

export default router;
