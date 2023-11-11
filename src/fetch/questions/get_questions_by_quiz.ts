import { prisma } from "@/lib/prisma";
import { getQuestionWithOptionsType } from "@/src/fetch/types/getQuiz";
import { Prisma } from "@prisma/client";

const getQuestionsByQuiz = (quizId: string) =>
  prisma.questions.findMany({
    where: {
      quiz_id: quizId,
    },
    select: {
      ...getQuestionWithOptionsType,
    },
  });

export type questionWithOptionType = Prisma.PromiseReturnType<
  typeof getQuestionsByQuiz
>[number];
