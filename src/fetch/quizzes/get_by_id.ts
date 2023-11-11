"use server";

import { prisma } from "@/lib/prisma";
import {
  defaultGet,
  getQuestionWithOptionsType,
} from "@/src/fetch/types/getQuiz";
import type { Prisma } from "@prisma/client";

export const getQuizById = (quizId: string) =>
  prisma.quizzes.findFirst({
    where: {
      id: quizId,
    },
    select: {
      ...defaultGet,
      questions: {
        select: {
          ...getQuestionWithOptionsType,
        },
      },
    },
  });

export type questionType = Prisma.PromiseReturnType<typeof getQuizById>;
