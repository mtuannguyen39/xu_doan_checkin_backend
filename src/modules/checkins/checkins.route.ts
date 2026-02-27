import express from "express";
import {
  createCheckin,
  getCheckinHistory,
  getStudentStats,
} from "./checkins.controller";
import { verifyToken } from "../../middleware/auth.middleware";

const router = express.Router();

router.post("/", verifyToken, createCheckin);
router.get("/history/:student_id", getCheckinHistory);
router.get("/stats/:student_id", getStudentStats);

export default router;
