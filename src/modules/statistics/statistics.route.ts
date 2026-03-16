import { Router } from "express";
import {
  exportAllClasses,
  exportAllDay,
  getDashboardStatistics,
  getFullStatistics,
} from "./statistics.controller";
import { verifyToken } from "../../middleware/auth.middleware";
import { requireRole, filterByClass } from "../../middleware/rbac.middleware";

const router = Router();

const allRoles = [
  "TRUONG_LOP",
  "TRUONG_TRUC",
  "XU_DOAN_PHO",
  "XU_DOAN_TRUONG",
  "SUPER_ADMIN",
] as const;

// Xuất data theo ngày
router.get("/export/day", verifyToken, exportAllDay);

// Xuất data
router.get(
  "/export",
  verifyToken,
  exportAllClasses, // RBAC check nằm trong controller
);

// Trang chủ dashboard
router.get(
  "/dashboard",
  verifyToken,
  requireRole(...allRoles),
  filterByClass,
  getDashboardStatistics,
);

// Trang Statistics đầy đủ
router.get(
  "/",
  verifyToken,
  requireRole(...allRoles),
  filterByClass,
  getFullStatistics,
);

export default router;
