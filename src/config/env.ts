import dotenv from "dotenv";

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ["JWT_SECRET", "DATABASE_URL"] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export const env = {
  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_EXPIRES: (process.env.JWT_EXPIRES || "7d") as string | number,
  DATABASE_URL: process.env.DATABASE_URL as string,
  PORT: process.env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || "development",
} as const;
