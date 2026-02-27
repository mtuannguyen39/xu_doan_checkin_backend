import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { full_name, email, password, role } = req.body;

    //Validate input
    if (!full_name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        full_name,
        email,
        password: hashedPassword,
        role: role || "TRUONG_LOP",
      },
    });

    res.json({ message: "User created", user });
  } catch (error) {
    console.error("Error to create user", error);
    res.status(500).json({ 
      error: "Error to create user",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );
    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login failed", error);
    res.status(500).json({ 
      error: "Login failed",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
