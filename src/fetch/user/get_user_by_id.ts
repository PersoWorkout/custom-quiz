import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type getUserByIdType = Prisma.PromiseReturnType<typeof getUserById>;

export const getUserById = async (id: string) =>
  await prisma.user.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      email: true,
      image: true,
      name: true,
      _count: {
        select: {
          quizzes: true,
          quizParticipation: true,
        },
      },
      quizzes: {
        select: {
          id: true,
          title: true,
          description: true,
        },
        skip: 3,
        take: 1,
      },
    },
  });
