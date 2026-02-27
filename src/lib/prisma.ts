import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// Singleton để tránh tạo nhiều connection
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Tạo pool connection
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Tạo adapter
const adapter = new PrismaPg(pool);

// Khởi tạo Prisma Client với adapter
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development" ?
        ["query", "error", "warn"]
      : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Cleanup function
export async function disconnect() {
  await prisma.$disconnect();
  await pool.end();
}
