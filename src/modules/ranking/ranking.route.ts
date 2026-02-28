import { Router } from "express";
import { getAttendanceRanking } from "./ranking.controller";

export const router = Router();

router.get("/attendance", getAttendanceRanking);

export default router;
