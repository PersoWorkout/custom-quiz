import { prisma } from "@/lib/prisma";
import { defaultGet } from "@/src/fetch/types/getQuiz";

export const getQuizById = (quizId: string) =>
  prisma.quizzes.findFirst({
    where: {
      id: quizId,
    },
    select: defaultGet,
  });
