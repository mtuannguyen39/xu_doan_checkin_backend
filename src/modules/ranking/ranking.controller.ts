import { prisma } from "../../lib/prisma";

export const getAttendanceRanking = async (req: any, res: any) => {
  try {
    const ranking = await prisma.student.findMany({
      where: { is_active: true },
      include: {
        _count: {
          select: { checkins: true },
        },
      },
      orderBy: {
        checkins: {
          _count: "desc",
        },
      },
    });

    const result = ranking.map((student, index) => ({
      rank: index + 1,
      student_id: student.id,
      full_name: student.full_name,
      saint_name: student.saint_name,
      class_name: student.class_name,
      nganh: student.nganh,
      total_checkins: student._count.checkins,
    }));

    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
