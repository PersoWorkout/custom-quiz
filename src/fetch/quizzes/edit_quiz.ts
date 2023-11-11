"use server";

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface Props {
  quizId: string;
  payload: Prisma.QuizzesUpdateInput;
}

export const editQuiz = async ({ quizId, payload }: Props) => {
  if (!quizId) {
    throw new Error("Quiz Id not found");
  }

  const session = await getAuthSession();
  if (!session?.user.id) {
    throw new Error("You are not logged");
  }

  return await prisma.quizzes.update({
    where: {
      id: quizId,
      user_id: session.user.id,
    },
    data: { ...payload },
  });
};
