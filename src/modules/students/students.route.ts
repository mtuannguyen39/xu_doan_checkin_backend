import { Router } from "express";
import {
  registerStudent,
  getStudentByQR,
  getAllStudents,
  deleteStudent,
  updateStudent,
} from "./students.controller";
import { verifyToken } from "../../middleware/auth.middleware";

const router = Router();

router.post("/register", registerStudent);
router.get("/:qr", getStudentByQR);
router.get("/", verifyToken, getAllStudents);

// Chỉnh sửa: SUPER_ADMIN hoặc TRUONG_LOP (lớp mình)
router.patch("/:id", verifyToken, updateStudent);
// Xóa student: SUPER_ADMIN hoặc TRUONG_LOP (lớp mình)
router.delete("/:id", verifyToken, deleteStudent);

export default router;
