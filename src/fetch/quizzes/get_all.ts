import { prisma } from "@/lib/prisma";
import { defaultGet } from "@/src/fetch/types/getQuiz";
import { Prisma } from "@prisma/client";

export type QuizHome = Prisma.PromiseReturnType<typeof getAllQuizes>[number];

export const getAllQuizes = async () =>
  prisma.quizzes.findMany({
    select: defaultGet,
  });
