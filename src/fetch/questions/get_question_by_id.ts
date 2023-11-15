"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getQuestionById = async (id: string) => {
  return await prisma.questions.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      question: true,
      quiz_id: true,
      created_at: true,
    },
  });
};

export type questionType = NonNullable<
  Prisma.PromiseReturnType<typeof getQuestionById>
>;
