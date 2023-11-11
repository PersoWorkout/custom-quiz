"use server";

import { prisma } from "@/lib/prisma";
import { defaultGet } from "@/src/fetch/types/getQuiz";

export const getQuizzesByUser = async (userId: string) =>
  await prisma.quizzes.findMany({
    where: {
      user_id: userId,
    },
    select: defaultGet,
    orderBy: {
      created_at: "asc",
    },
  });
