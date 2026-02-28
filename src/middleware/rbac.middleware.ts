import { Response, NextFunction } from "express";
import { UserRole } from "@prisma/client";
import { AuthRequest } from "./auth.middleware";

export type Permission =
  | "students:read"
  | "students:write"
  | "students:delete"
  | "checkins:read"
  | "checkins:write"
  | "activities:read"
  | "activities:write"
  | "activities:delete"
  | "leaderboard:read"
  | "ranking:read"
  | "statistics:read"
  | "statistics:advanced"
  | "users:read"
  | "users:write"
  | "users:delete"
  | "users:grant_role"
  | "classes:read"
  | "classes:read_own"
  | "reports:read"
  | "reports:export";

export const DEFAULT_ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  SUPER_ADMIN: [
    "students:read",
    "students:write",
    "students:delete",
    "checkins:read",
    "checkins:write",
    "activities:read",
    "activities:write",
    "activities:delete",
    "leaderboard:read",
    "ranking:read",
    "statistics:read",
    "statistics:advanced",
    "users:read",
    "users:write",
    "users:delete",
    "users:grant_role",
    "classes:read",
    "reports:read",
    "reports:export",
  ],
  XU_DOAN_TRUONG: [
    "students:read",
    "students:write",
    "checkins:read",
    "checkins:write",
    "activities:read",
    "activities:write",
    "leaderboard:read",
    "ranking:read",
    "statistics:read",
    "statistics:advanced",
    "users:read",
    "users:write",
    "classes:read",
    "reports:read",
    "reports:export",
  ],
  XU_DOAN_PHO: [
    "students:read",
    "students:write",
    "checkins:read",
    "checkins:write",
    "activities:read",
    "activities:write",
    "leaderboard:read",
    "ranking:read",
    "statistics:read",
    "users:read",
    "classes:read",
    "reports:read",
  ],
  TRUONG_TRUC: [
    "students:read",
    "checkins:read",
    "checkins:write",
    "activities:read",
    "leaderboard:read",
    "ranking:read",
    "statistics:read",
    "classes:read",
  ],
  TRUONG_LOP: [
    "students:read",
    "checkins:read",
    "checkins:write",
    "activities:read",
    "leaderboard:read",
    "classes:read_own",
    "statistics:read",
  ],
};

// ============================================================
// Permission Cache (TTL 5 phút)
// ============================================================
interface PermissionCache {
  permissions: Permission[];
  cachedAt: number;
}
const permissionCache = new Map<number, PermissionCache>();
const CACHE_TTL = 5 * 60 * 1000;

// ✅ FIX: nhận `role: string` thay vì `UserRole` để tránh lỗi type mismatch từ JWT payload
async function getUserPermissions(
  userId: number,
  role: string,
): Promise<Permission[]> {
  const cached = permissionCache.get(userId);
  if (cached && Date.now() - cached.cachedAt < CACHE_TTL)
    return cached.permissions;

  // Cast sang UserRole sau khi đã nhận string từ JWT
  const typedRole = role as UserRole;
  const permissions: Permission[] = [
    ...(DEFAULT_ROLE_PERMISSIONS[typedRole] ?? []),
  ];

  permissionCache.set(userId, { permissions, cachedAt: Date.now() });
  return permissions;
}

export function clearPermissionCache(userId: number) {
  permissionCache.delete(userId);
}

// ============================================================
// requirePermission - tất cả perms phải có (AND)
// ============================================================
export const requirePermission = (...requiredPermissions: Permission[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const userPermissions = await getUserPermissions(
      req.user.id,
      req.user.role,
    );
    const hasAll = requiredPermissions.every((p) =>
      userPermissions.includes(p),
    );

    if (!hasAll) {
      return res.status(403).json({
        message: "Bạn không có quyền thực hiện hành động này!",
        required: requiredPermissions,
        your_role: req.user.role,
      });
    }

    req.user.permissions = userPermissions;
    next();
  };
};

// ============================================================
// requireAnyPermission - có 1 trong nhiều perms là đủ (OR)
// Dùng cho route cần "classes:read" HOẶC "classes:read_own"
// ============================================================
export const requireAnyPermission = (...requiredPermissions: Permission[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    const userPermissions = await getUserPermissions(
      req.user.id,
      req.user.role,
    );
    const hasAny = requiredPermissions.some((p) => userPermissions.includes(p));

    if (!hasAny) {
      return res.status(403).json({
        message: "Bạn không có quyền thực hiện hành động này!",
        required_any: requiredPermissions,
        your_role: req.user.role,
      });
    }

    req.user.permissions = userPermissions;
    next();
  };
};

// ============================================================
// filterByClass - tự động filter TRUONG_LOP chỉ thấy lớp mình
// ============================================================
export const filterByClass = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });

  // ✅ FIX: cast sang UserRole để so sánh với enum
  const role = req.user.role as UserRole;

  if (role === "TRUONG_LOP") {
    if (!req.user.class_name) {
      return res
        .status(403)
        .json({ message: "Tài khoản TRUONG_LOP chưa được gán lớp!" });
    }
    req.classFilter = req.user.class_name;
  } else {
    req.classFilter = null;
  }

  next();
};

// ============================================================
// requireRole - kiểm tra role cụ thể
// ============================================================
export const requireRole = (...roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    // ✅ FIX: cast sang UserRole trước khi dùng includes()
    const userRole = req.user.role as UserRole;

    if (!roles.includes(userRole)) {
      return res.status(403).json({
        message: "Bạn không có quyền truy cập!",
        required_roles: roles,
        your_role: req.user.role,
      });
    }
    next();
  };
};

// ============================================================
// grantPermissions & listPermissions
// ============================================================
export const grantPermissions = async (req: AuthRequest, res: Response) => {
  try {
    const { target_user_id, permissions } = req.body;

    if ((req.user?.role as UserRole) !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Chỉ SUPER_ADMIN mới có thể cấp quyền!" });
    }

    const allValid: Permission[] = [
      "students:read",
      "students:write",
      "students:delete",
      "checkins:read",
      "checkins:write",
      "activities:read",
      "activities:write",
      "activities:delete",
      "leaderboard:read",
      "ranking:read",
      "statistics:read",
      "statistics:advanced",
      "users:read",
      "users:write",
      "users:delete",
      "users:grant_role",
      "classes:read",
      "classes:read_own",
      "reports:read",
      "reports:export",
    ];

    const invalid = (permissions as string[]).filter(
      (p) => !allValid.includes(p as Permission),
    );
    if (invalid.length > 0) {
      return res.status(400).json({
        message: "Quyền không hợp lệ",
        invalid,
        valid_permissions: allValid,
      });
    }

    clearPermissionCache(Number(target_user_id));

    return res.json({
      message: `Đã cấp ${permissions.length} quyền cho user #${target_user_id}`,
      granted: permissions,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

export const listPermissions = (_: AuthRequest, res: Response) => {
  return res.json({
    permissions: DEFAULT_ROLE_PERMISSIONS,
    role_defaults: DEFAULT_ROLE_PERMISSIONS,
  });
};
