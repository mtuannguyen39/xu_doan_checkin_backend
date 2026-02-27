/*
  Warnings:

  - A unique constraint covering the columns `[checkin_id,activity_id]` on the table `checkin_details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `saint_name` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "students_phone_idx";

-- AlterTable
ALTER TABLE "checkins" ALTER COLUMN "total_point" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "saint_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "checkin_details_checkin_id_activity_id_key" ON "checkin_details"("checkin_id", "activity_id");

-- CreateIndex
CREATE INDEX "checkins_checkin_date_idx" ON "checkins"("checkin_date");

-- CreateIndex
CREATE INDEX "students_nganh_idx" ON "students"("nganh");
