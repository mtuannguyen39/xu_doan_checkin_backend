import { Router } from "express";
import { verifyToken } from "../../../middleware/auth.middleware";
import { requireRole } from "../../../middleware/rbac.middleware";
import {
  createAssignment,
  deleteAssignment,
  getAssignments,
  updateAssignment,
} from "../controllers/class-assignments.controller";

const router = Router();

const viewRoles = [
  "SUPER_ADMIN",
  "XU_DOAN_TRUONG",
  "XU_DOAN_PHO",
  "TRUONG_TRUC",
  "TRUONG_LOP",
] as const;
const manageRoles = ["SUPER_ADMIN", "XU_DOAN_TRUONG", "XU_DOAN_PHO"] as const;

// Lấy dữ liệu phân công
router.get("/", verifyToken, requireRole(...viewRoles), getAssignments);
// Tạo phân công
router.post("/", verifyToken, requireRole(...manageRoles), createAssignment);
// Xóa phân công
router.delete(
  "/:id",
  verifyToken,
  requireRole(...manageRoles),
  deleteAssignment,
);
// Cập nhật phân công
router.put("/:id", verifyToken, requireRole(...manageRoles), updateAssignment);

export default router;
