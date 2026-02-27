export const generateStudentId = async (
  prisma: any,
  nganh: string,
  class_name: string,
) => {
  const nganhMap: Record<string, string> = {
    "Chiên Con": "CH",
    "Ấu nhi": "AN",
    "Thiếu Nhi": "TN",
    "Nghĩa Sĩ": "NS",
    "Dự Trưởng": "DT",
    // Thêm vào các trường hợp, thiếu nhi có thể đánh vào để có thể generate ra đúng ID mong muống
  };

  const prefixNganh = nganhMap[nganh] || "XX";

  // Lấy số lớp (VD: Thiếu 2 -> 02)
  const classNumberMatch = class_name.match(/\d+/);
  const classNumber =
    classNumberMatch ? classNumberMatch[0].padStart(2, "0") : "00";

  const basePrefix = `${prefixNganh}${classNumber}`;

  // Count the number of students with the same base prefix
  const count = await prisma.student.count({
    where: {
      id: {
        startsWith: basePrefix,
      },
    },
  });

  const sequence = String(count + 1).padStart(4, "0");

  return `${basePrefix}-${sequence}`;
};
