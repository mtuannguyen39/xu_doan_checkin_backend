import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getLeaderboard = async (_: Request, res: Response) => {
  const leaderboard = await prisma.student.findMany({
    include: {
      checkins: true,
    },
  });

  const result = leaderboard.map((student: (typeof leaderboard)[0]) => {
    const total = student.checkins.reduce(
      (sum: number, c: (typeof student.checkins)[0]) => sum + c.total_point,
      0,
    );

    return {
      id: student.id,
      full_name: student.full_name,
      class_name: student.class_name,
      total_point: total,
    };
  });

  result.sort((a: typeof result[0], b: typeof result[0]) => b.total_point - a.total_point);

  res.json(result.slice(0, 10));
};
