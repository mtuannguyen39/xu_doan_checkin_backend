/*
  Warnings:

  - A unique constraint covering the columns `[hoc_ba_token]` on the table `students` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ClassAssignmentRole" AS ENUM ('HUYNH_TRUONG', 'DU_TRUONG', 'SOUR');

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "email" TEXT,
ADD COLUMN     "hoc_ba_token" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD COLUMN     "parent_father_name" TEXT,
ADD COLUMN     "parent_father_phone" TEXT,
ADD COLUMN     "parent_mother_name" TEXT,
ADD COLUMN     "parent_mother_phone" TEXT;

-- CreateTable
CREATE TABLE "school_years" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_year" INTEGER NOT NULL,
    "end_year" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "school_years_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "academic_scores" (
    "id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "school_year_id" INTEGER NOT NULL,
    "score_type" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" DOUBLE PRECISION,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "academic_scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_leader_assignments" (
    "id" SERIAL NOT NULL,
    "school_year_id" INTEGER NOT NULL,
    "class_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "assignment_role" "ClassAssignmentRole" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "class_leader_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "school_years_name_key" ON "school_years"("name");

-- CreateIndex
CREATE INDEX "academic_scores_student_id_school_year_id_idx" ON "academic_scores"("student_id", "school_year_id");

-- CreateIndex
CREATE UNIQUE INDEX "academic_scores_student_id_school_year_id_score_type_key" ON "academic_scores"("student_id", "school_year_id", "score_type");

-- CreateIndex
CREATE INDEX "class_leader_assignments_school_year_id_class_name_idx" ON "class_leader_assignments"("school_year_id", "class_name");

-- CreateIndex
CREATE UNIQUE INDEX "class_leader_assignments_school_year_id_class_name_user_id_key" ON "class_leader_assignments"("school_year_id", "class_name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "students_hoc_ba_token_key" ON "students"("hoc_ba_token");

-- AddForeignKey
ALTER TABLE "academic_scores" ADD CONSTRAINT "academic_scores_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "academic_scores" ADD CONSTRAINT "academic_scores_school_year_id_fkey" FOREIGN KEY ("school_year_id") REFERENCES "school_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_leader_assignments" ADD CONSTRAINT "class_leader_assignments_school_year_id_fkey" FOREIGN KEY ("school_year_id") REFERENCES "school_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_leader_assignments" ADD CONSTRAINT "class_leader_assignments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
