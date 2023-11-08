import { prisma } from "@/lib/prisma";
import { defaultGet } from "@/src/fetch/types/getQuiz";

export const getQuizById = (quizId: string) =>
  prisma.quizzes.findFirst({
    where: {
      id: quizId,
    },
    select: {
      ...defaultGet,
      questions: {
        select: {
          id: true,
          question: true,
          options: {
            select: {
              option: true,
              color: true,
              is_correct: true,
            },
          },
        },
      },
    },
  });
