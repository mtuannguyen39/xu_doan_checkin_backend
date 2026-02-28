import { Router } from "express";
import { getDashboardStatistics } from "./statistics.controller";
import { verifyToken } from "../../middleware/auth.middleware";
import { requireRole, filterByClass } from "../../middleware/rbac.middleware";

const router = Router();

router.get(
  "/dashboard",
  verifyToken,
  requireRole(
    "TRUONG_LOP",
    "TRUONG_TRUC",
    "XU_DOAN_TRUONG",
    "XU_DOAN_PHO",
    "SUPER_ADMIN",
  ),
  filterByClass,
  getDashboardStatistics,
);

export default router;
