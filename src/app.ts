import express from "express";
import cors from "cors";

import studentRoutes from "./modules/students/students.route";
import activityRoutes from "./modules/activities/activities.route";
import checkinRoutes from "./modules/checkins/checkins.route";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.route";
import authRoutes from "./modules/auth/auth.route";
import statisticsRoutes from "./modules/statistics/statistics.route";
import rankingRoutes from "./modules/ranking/ranking.route";

const app = express();

// ✅ Cho phép nhiều origin: localhost dev + Vercel production
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // Cho phép request không có origin (mobile app, Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS blocked: ${origin}`));
    },
    credentials: true,
  }),
);

app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/checkins", checkinRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/statistics", statisticsRoutes);
app.use("/api/ranking", rankingRoutes);
app.use("/api/auth", authRoutes);

// Health check — Render dùng cái này để biết server đang sống
app.get("/api/health", (_, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default app;
