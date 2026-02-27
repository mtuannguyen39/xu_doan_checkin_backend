import express from "express";
import cors from "cors";

import studentRoutes from "./modules/students/students.route";
import activityRoutes from "./modules/activities/activities.route";
import checkinRoutes from "./modules/checkins/checkins.route";
import leaderboardRoutes from "./modules/leaderboard/leaderboard.route";
import authRoutes from "./modules/auth/auth.route";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/checkins", checkinRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

// Authenticate
app.use("/api/auth", authRoutes);

export default app;
