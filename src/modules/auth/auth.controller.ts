import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../../middleware/auth.middleware";
import {
  DEFAULT_ROLE_PERMISSIONS,
  clearPermissionCache,
  grantPermissions,
  listPermissions,
} from "../../middleware/rbac.middleware";
import { UserRole } from "@prisma/client";

export const register = async (req: Request, res: Response) => {
  try {
    const { full_name, email, password, role, class_name } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        full_name,
        email,
        password: hashedPassword,
        role: role || "TRUONG_LOP",
        class_name: class_name || null,
      },
    });

    const { password: _, ...safeUser } = user;
    return res.json({ message: "User created", user: safeUser });
  } catch (error) {
    console.error("Error creating user", error);
    return res.status(500).json({ error: "Error creating user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid password" });

    // ✅ Include class_name trong JWT để filterByClass middleware dùng
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        role: user.role,
        class_name: user.class_name, // 🔑 Quan trọng cho TRUONG_LOP filter
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    const { password: _, ...safeUser } = user;

    return res.json({
      message: "Login successful",
      token,
      user: safeUser,
      permissions: DEFAULT_ROLE_PERMISSIONS[user.role as UserRole] || [],
    });
  } catch (error) {
    console.error("Login failed", error);
    return res.status(500).json({ error: "Login failed" });
  }
};

// GET /auth/me
export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        class_name: true,
        created_at: true,
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const permissions = DEFAULT_ROLE_PERMISSIONS[user.role as UserRole] || [];
    return res.json({ user, permissions });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// GET /auth/users — SUPER_ADMIN, XU_DOAN_TRUONG
export const getAllUsers = async (_req: AuthRequest, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        class_name: true,
        created_at: true,
      },
      orderBy: { created_at: "desc" },
    });

    const result = users.map((u) => ({
      ...u,
      permissions: DEFAULT_ROLE_PERMISSIONS[u.role as UserRole] || [],
    }));

    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// PUT /auth/users/:id/role — SUPER_ADMIN only
export const updateUserRole = async (req: AuthRequest, res: Response) => {
  try {
    // ✅ FIX: params luôn là string, dùng String() để chắc chắn type
    const rawId = req.params["id"];
    const id = String(rawId); // tránh lỗi string | string[]

    const { role, class_name } = req.body;

    const validRoles: UserRole[] = [
      "SUPER_ADMIN",
      "XU_DOAN_TRUONG",
      "XU_DOAN_PHO",
      "TRUONG_TRUC",
      "TRUONG_LOP",
    ];

    if (!validRoles.includes(role as UserRole)) {
      return res
        .status(400)
        .json({ message: "Role không hợp lệ", valid: validRoles });
    }

    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "ID không hợp lệ" });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        role: role as UserRole,
        class_name: class_name || null,
      },
      select: {
        id: true,
        full_name: true,
        email: true,
        role: true,
        class_name: true,
      },
    });

    clearPermissionCache(userId);

    return res.json({
      message: `Đã cập nhật role thành ${role}`,
      user,
      new_permissions: DEFAULT_ROLE_PERMISSIONS[role as UserRole],
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

// DELETE /auth/users/:id - SUPER_ADMIN ONLY
export const deleteUser = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });

    if ((req.user.role as string) !== "SUPER_ADMIN") {
      return res
        .status(403)
        .json({ message: "Chỉ SUPER_ADMIN mới có thể xóa tài khoản!" });
    }

    const rawId = req.params["id"];
    const userId = parseInt(String(rawId), 10);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "ID không hợp lệ" });
    }

    // Không cho tự xóa mình
    if (req.user.id === userId) {
      return res
        .status(400)
        .json({ message: "Không thể tự xóa tài khoản của mình!" });
    }

    const target = await prisma.user.findUnique({ where: { id: userId } });
    if (!target)
      return res.status(404).json({ message: "User không tồn tại!" });

    await prisma.user.delete({ where: { id: userId } });

    return res.json({
      message: `Đã xóa tài khoản ${target.full_name} thành công!`,
    });
  } catch (error) {
    console.error("Delete user error:", error);
    return res.status(500).json({ error: "Xóa tài khoản thất bại!" });
  }
};

export { grantPermissions, listPermissions };
