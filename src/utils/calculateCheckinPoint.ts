/**
 * Tính điểm dựa trên giờ checkin:
 * 06:45 - 07:15 → 10 điểm (đúng giờ)
 * 07:16 - 07:20 → 5 điểm  (trễ nhẹ)
 * 07:21+        → 0 điểm  (trễ, nhưng vẫn ghi nhận điểm danh)
 */
export function calculateCheckinPoint(now: Date = new Date()): number {
  const h = now.getHours();
  const m = now.getMinutes();
  const totalMinutes = h * 60 + m;

  const START = 6 * 60 + 45; // 6h45
  const CUT1 = 7 * 60 + 15; // 7h15
  const CUT2 = 7 * 60 + 20;

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
