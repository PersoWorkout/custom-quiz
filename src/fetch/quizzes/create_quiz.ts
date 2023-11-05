"use server";

import { prisma } from "@/lib/prisma";

type params = {
  title: string;
  description: string;
  user_id: string;
};

export const createQuiz = async (payload: params) => {
  return await prisma.quizzes.create({
    data: payload,
  });
};
