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
  };

  const prefixNganh = nganhMap[nganh] || "XX";

  // Lấy số lớp (VD: "Thiếu 2" → "02", "Khai tâm 1" → "01")
  const classNumberMatch = class_name.match(/\d+/);
  const classNumber =
    classNumberMatch ? classNumberMatch[0].padStart(2, "0") : "00";

  const basePrefix = `${prefixNganh}${classNumber}`;

  // ✅ FIX: lấy tất cả ID hiện có thay vì dùng count
  // count + 1 bị lỗi khi có student bị xóa → ID mới trùng ID cũ đã xóa
  const existing = await prisma.student.findMany({
    where: { id: { startsWith: basePrefix } },
    select: { id: true },
  });

  // Parse sequence number từ mỗi ID, VD: "TN02-0003" → 3
  const usedSeqs = new Set<number>(
    existing.map((s: { id: string }) => {
      const parts = s.id.split("-");
      const seq = parseInt(parts[parts.length - 1], 10);
      return isNaN(seq) ? 0 : seq;
    }),
  );

  // Tìm số nhỏ nhất chưa được dùng (bắt đầu từ 1)
  let next = 1;
  while (usedSeqs.has(next)) {
    next++;
  }

  const sequence = String(next).padStart(4, "0");
  return `${basePrefix}-${sequence}`;
};
