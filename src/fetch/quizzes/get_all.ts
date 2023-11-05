import { prisma } from "@/lib/prisma";
import { defaultGet } from "@/src/fetch/types/getQuiz";
import { Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export type QuizHome = Prisma.PromiseReturnType<typeof getAllQuizes>[number];

export const getAllQuizes = async () =>
  await prisma.quizzes.findMany({
    select: defaultGet,
  });
