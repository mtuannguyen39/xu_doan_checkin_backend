import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { Permission } from "./rbac.middleware";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthRequest extends Request {
  user?: {
    id: number;
    role: string; // string vì đến từ JWT payload
    email?: string;
    full_name?: string;
    class_name?: string; // 🔑 Quan trọng cho TRUONG_LOP filter
    permissions?: Permission[];
  };
  classFilter?: string | null; // Được gán bởi filterByClass middleware
}

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
