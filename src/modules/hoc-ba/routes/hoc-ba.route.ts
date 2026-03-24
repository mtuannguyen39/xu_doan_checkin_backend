import { Router } from "express";
import { verifyToken } from "../../../middleware/auth.middleware";
import { requireRole } from "../../../middleware/rbac.middleware";
import {
  deleteScore,
  getHocBaToken,
  getPublicHocBa,
  getStudentHocBa,
  updateStudentInfo,
  upsertScore,
} from "../controllers/hoc-ba.controller";

const router = Router();

// PUBLIC (không cần auth)
router.get("/public/:token", getPublicHocBa);

// ADMIN (Cần auth)

router.get(
  "/students/:id",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO", "TRUONG_LOP"),
  getStudentHocBa,
); // TRUONG_TRUC không cần truy xuất vào dữ liệu
router.get(
  "/students/:id/token",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO", "TRUONG_LOP"),
  getHocBaToken,
);
router.put(
  "/students/:id/info",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO", "TRUONG_LOP"),
  updateStudentInfo,
);
router.post(
  "/students/:id/scores",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO", "TRUONG_LOP"),
  upsertScore,
);
router.delete(
  "/students/:id/scores/:scoreId",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO", "TRUONG_LOP"),
  deleteScore,
);

export default router;
