"use server";

import { prisma } from "@/lib/prisma";

type Props = {
  questionId: string;
  question: string;
};

export const editQuestion = async ({ questionId, question }: Props) => {
  return await prisma.questions.update({
    where: {
      id: questionId,
    },
    data: {
      question,
    },
  });
};
