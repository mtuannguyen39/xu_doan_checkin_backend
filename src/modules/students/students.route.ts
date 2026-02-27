import { Router } from "express";
import {
  registerStudent,
  getStudentByQR,
  getAllStudents,
} from "./students.controller";
import { requireRole, verifyToken } from "../../middleware/auth.middleware";

const router = Router();

router.post("/register", registerStudent);
router.get("/:qr", getStudentByQR);
router.get("/", verifyToken, getAllStudents);

export default router;
