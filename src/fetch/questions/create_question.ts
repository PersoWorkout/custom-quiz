"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const createQuestion = (payload: Prisma.QuestionsUncheckedCreateInput) =>
  prisma.questions.create({
    data: payload,
  });
