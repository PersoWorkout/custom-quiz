"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const createQuestionOption = async (
  payload: Prisma.QuestionsOptionsUncheckedCreateInput
) => {
  return await prisma.questionsOptions.create({
    data: payload,
  });
};
