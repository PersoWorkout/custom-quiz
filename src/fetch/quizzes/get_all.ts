import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type QuizHome = Prisma.PromiseReturnType<typeof getAllQuizes>[number];

export const getAllQuizes = async () =>
  prisma.quizs.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      created_at: true,
      expired_at: true,
      user: {
        select: {
          firstname: true,
          lastname: true,
        },
      },
      _count: {
        select: {
          participants: true,
        },
      },
    },
  });
