import { Router } from "express";
import { getDashboardStatistics } from "./statistics.controller";
import { verifyToken } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";
import { UserRole } from "@prisma/client";

const router = Router();

/**
 * Dashboard Statistics
 * TRUONG_LOP        → xem lớp của mình (sau này có thể filter theo class)
 * TRUONG_TRUC       → xem toàn bộ
 * XU_DOAN_TRUONG    → xem toàn bộ
 * XU_DOAN_PHO       → xem toàn bộ
 * SUPER_ADMIN       → full quyền
 */

router.get(
  "/dashboard",
  verifyToken,
  authorize(
    UserRole.TRUONG_LOP,
    UserRole.TRUONG_TRUC,
    UserRole.XU_DOAN_TRUONG,
    UserRole.XU_DOAN_PHO,
    UserRole.SUPER_ADMIN,
  ),
  getDashboardStatistics,
);

export default router;
