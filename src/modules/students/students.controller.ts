import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import { generateStudentId } from "../../utils/generateStudentId";
import { AuthRequest } from "../../middleware/auth.middleware";

// ✅ Define custom interface
interface StudentParams {
  qr: string;
}

export const registerStudent = async (req: Request, res: Response) => {
  try {
    const { full_name, saint_name, class_name, nganh } = req.body;

    if (!full_name || !saint_name || !class_name || !nganh) {
      return res.status(400).json({ error: "Thiếu thông tin thiếu nhi" });
    }

    const studentId = await generateStudentId(prisma, nganh, class_name);

    const student = await prisma.student.create({
      data: {
        id: studentId,
        full_name,
        saint_name,
        class_name,
        nganh,
        qr_code: uuidv4(),
      },
    });

    const { qr_code, ...safeData } = student;

    res.status(201).json({
      message: "Thiếu nhi đã được tạo thành công!",
      data: safeData,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Failed to create student" });
  }
};

// GET STUDENT BY QR CODE
export const getStudentByQR = async (
  req: Request<StudentParams>,
  res: Response,
) => {
  try {
    const { qr } = req.params;

    // Now qr is typed as string
    if (!uuidValidate(qr)) {
      return res.status(400).json({ error: "Invalid QR code format" });
    }

    const student = await prisma.student.findUnique({
      where: { qr_code: qr },
      include: {
        checkins: true,
      },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const { qr_code, ...safeData } = student;
    res.json(safeData);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ error: "Error fetching student" });
  }
};

// GET ALL STUDENTS
export const getAllStudents = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;

    let whereCondition = {};

    if (user.role === "TRUONG_LOP") {
      whereCondition = { class_name: user.class_name };
    }

    const students = await prisma.student.findMany({
      where: whereCondition,
      orderBy: { created_at: "desc" },
    });

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error to fetch students" });
  }
};
