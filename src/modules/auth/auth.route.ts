import { Router } from "express";
import {
  register,
  login,
  getMe,
  getAllUsers,
  updateUserRole,
  grantPermissions,
  listPermissions,
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
router.get(
  "/users",
  verifyToken,
  requireRole("SUPER_ADMIN", "XU_DOAN_TRUONG"),
  getAllUsers,
);
router.put(
  "/users/:id/role",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  updateUserRole,
);
router.post(
  "/users/grant-permissions",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  grantPermissions,
);
router.get(
  "/permissions",
  verifyToken,
  requireRole("SUPER_ADMIN"),
  listPermissions,
);

export default router;
