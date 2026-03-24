import { Router } from "express";
import { verifyToken } from "../../../middleware/auth.middleware";
import { requireRole } from "../../../middleware/rbac.middleware";
import {
  createSchoolYear,
  deleteSchoolYear,
  getAllSchoolYears,
  setActiveSchoolYear,
  updateSchoolYear,
} from "../controllers/school-years.controller";

const router = Router();

router.get("/", verifyToken, getAllSchoolYears);
router.post(
  "/",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO"),
  createSchoolYear,
);
router.put(
  "/:id",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO"),
  updateSchoolYear,
);
router.put(
  "/:id/set-active",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG"),
  setActiveSchoolYear,
);
router.delete(
  "/:id",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG"),
  deleteSchoolYear,
);

export default router;
