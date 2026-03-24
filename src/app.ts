import express from "express";
import cors from "cors";

import studentRoutes from "./modules/students/students.route";
import activityRoutes from "./modules/activities/activities.route";
import checkinRoutes from "./modules/checkins/checkins.route";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.route";
import authRoutes from "./modules/auth/auth.route";
import statisticsRoutes from "./modules/statistics/statistics.route";
import rankingRoutes from "./modules/ranking/ranking.route";
import schoolYearRouter from "./modules/school-years/routes/school-years.route";
import hocBaRouter from "./modules/hoc-ba/routes/hoc-ba.route";
import classAssignmentsRouter from "./modules/class-assignments/routes/class-assignments.route";

const app = express();

// ✅ Build danh sách allowed origins từ env
// FRONTEND_URL có thể là 1 URL hoặc nhiều URL cách nhau bởi dấu phẩy
// VD: "https://tantrang-checkin.vercel.app,https://other-domain.com"
const rawFrontendUrl = process.env.FRONTEND_URL || "";
const extraOrigins = rawFrontendUrl
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  ...extraOrigins,
];

console.log("✅ Allowed CORS origins:", allowedOrigins);

app.use(
  cors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      // Cho phép request không có origin (Postman, mobile app, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Log để debug
      console.warn(`❌ CORS blocked: ${origin}`);
      console.warn(`   Allowed: ${allowedOrigins.join(", ")}`);
      return callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/checkins", checkinRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/statistics", statisticsRoutes);
app.use("/api/ranking", rankingRoutes);
app.use("/api/auth", authRoutes);

// New routes for HocBa 
app.use("/api/school-years", schoolYearRouter);
app.use("/api/hoc-ba", hocBaRouter);
app.use("/api/class-assignments", classAssignmentsRouter);

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    allowed_origins: allowedOrigins,
  });
});

export default app;
