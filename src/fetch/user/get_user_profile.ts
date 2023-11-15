"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export type getUserProfileType = NonNullable<
  Prisma.PromiseReturnType<typeof getUserProfile>
>;

export const getUserProfile = (id: string) =>
  prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      firstname: true,
      email: true,
      image: true,
    },
  });
