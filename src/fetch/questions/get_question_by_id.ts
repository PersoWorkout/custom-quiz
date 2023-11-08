import { prisma } from "@/lib/prisma";

export const getQuestionById = async (id: string) => {
  return await prisma.questions.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      question: true,
      quiz_id: true,
    },
  });
};
