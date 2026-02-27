import { v4 as uuidv4 } from "uuid";
import { generateStudentId } from "../src/utils/generateStudentId";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const studentsData = [
    {
      full_name: "Nguyễn Minh Tuấn",
      class_name: "Thiếu 2",
      nganh: "Thiếu Nhi",
    },
    {
      full_name: "Nguyễn Minh Tún",
      class_name: "Chiên 1",
      nganh: "Chiên Con",
    },
    {
      full_name: "Nguyễn Minh Tứn",
      class_name: "Nghĩa 2",
      nganh: "Nghĩa Sĩ",
    },
  ];

  for (const s of studentsData) {
    const id = await generateStudentId(prisma, s.nganh, s.class_name);

    await prisma.student.create({
      data: {
        id,
        full_name: s.full_name,
        class_name: s.class_name,
        nganh: s.nganh,
        qr_code: uuidv4(),
      },
    });
  }

  console.log("Seed completed");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
