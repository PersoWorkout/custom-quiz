"use server";

import { prisma } from "@/lib/prisma";
import { Prisma, Questions } from "@prisma/client";

type params = {
  question: string;
  quiz_id: string;
};

export const createQuestion = async (payload: params) => {
  return await prisma.questions.create({
    data: payload,
  });
};
