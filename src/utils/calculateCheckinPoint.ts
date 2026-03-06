/**
 * Tính điểm dựa trên giờ checkin:
 * 06:45 - 07:15 → 5 điểm (đúng giờ)
 * 07:16 - 07:20 → 2 điểm  (trễ nhẹ)
 * 07:21+        → 0 điểm  (trễ, nhưng vẫn ghi nhận điểm danh)
 */
export function calculateCheckinPoint(now: Date = new Date()): number {
  const VN_OFFSET = 7 * 60;
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const totalMinutes = (utcMinutes + VN_OFFSET) % (24 * 60);

  const START = 6 * 60 + 45; // 6h45 = 405 phút
  const CUT1 = 7 * 60 + 15; // 7h15 = 435 phút
  const CUT2 = 7 * 60 + 20; // 7h20 = 440 phút
  // const START = 0 * 60 + 25; // 11h13 = 405 phút
  // const CUT1 = 0 * 60 + 35; // 7h15 = 435 phút
  // const CUT2 = 0 * 60 + 40; // 7h20 = 440 phút

  if (totalMinutes >= START && totalMinutes <= CUT1) return 5;
  if (totalMinutes > CUT1 && totalMinutes <= CUT2) return 2;

  return 0;
}

/**
 * Label hiển thị cho frontend
 */
export function getCheckinLabel(point: number): {
  label: string;
  color: string;
} {
  if (point === 5) return { label: "Đúng giờ", color: "#10b981" };
  if (point === 2) return { label: "Trễ nhẹ", color: "#f59e0b" };
  return { label: "Trễ, nhưng vẫn điểm danh được!", color: "#ef4444" };
}
