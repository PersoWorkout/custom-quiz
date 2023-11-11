"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type Props = {
  id: string;
  payload: Prisma.QuestionsOptionsUpdateInput;
};

export const editOption = async ({ id, payload }: Props) =>
  await prisma.questionsOptions.update({
    where: {
      id,
    },
    data: {
      option: payload.option,
      is_correct: payload.is_correct,
      color: payload.color,
    },
  });
