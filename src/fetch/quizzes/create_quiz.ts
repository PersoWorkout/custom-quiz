"use server";

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Quizzes } from "@prisma/client";

type params = {
  title: string;
  description: string;
};

export const createQuiz = async (payload: params) => {
  const session = await getAuthSession();

  if (!session?.user.id) {
    throw new Error("Invalid user");
  }

  return await prisma.quizzes.create({
    data: { ...payload, user_id: session.user.id },
  });
};
