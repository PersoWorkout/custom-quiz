"use server";

import { prisma } from "@/lib/prisma";
import { getOptionType } from "../types/getQuiz";
import { Prisma } from "@prisma/client";

export const getOptionById = async (id: string) =>
  await prisma.questionsOptions.findFirstOrThrow({
    where: {
      id,
    },
    select: {
      ...getOptionType,
      question: {
        select: {
          quiz: {
            select: {
              user_id: true,
            },
          },
        },
      },
    },
  });

export type getOptionByIdType = NonNullable<
  Prisma.PromiseReturnType<typeof getOptionById>
>;
