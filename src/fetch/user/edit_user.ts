"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type Props = {
  userId: string;
  payload: Prisma.UserUpdateInput;
};

export const editUserProfile = async ({ userId, payload }: Props) =>
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });
