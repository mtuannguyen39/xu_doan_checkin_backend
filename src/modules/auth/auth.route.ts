import { Router } from "express";
import {
  register,
  login,
  getMe,
  getAllUsers,
  updateUserRole,
  grantPermissions,
  listPermissions,
  deleteUser,
} from "./auth.controller";
import { verifyToken } from "../../middleware/auth.middleware";
import {
  requireRole,
  requirePermission,
} from "../../middleware/rbac.middleware";

const router = Router();

// Public
router.post("/register", register);
router.post("/login", login);

// Protected
router.get("/me", verifyToken, getMe);

// SUPER_ADMIN only
// Lấy danh sách user
router.get(
  "/users",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG"),
  getAllUsers,
);
// Cập nhật user
router.put(
  "/users/:id/role",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  updateUserRole,
);
// Gắn Role
router.post(
  "/users/grant-permissions",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  grantPermissions,
);
// Danh sách các role
router.get(
  "/permissions",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  listPermissions,
);
// Xóa user
router.delete(
  "/users/:id",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  deleteUser,
);

export default router;
