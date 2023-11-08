import { prisma } from "@/lib/prisma";
import { useQuery } from "@tanstack/react-query";

const getQuestionsByQuiz = (quizId: string) =>
  prisma.questions.findMany({
    where: {
      quiz_id: quizId,
    },
  });

// const useGetQuesstionsByQuiz = (quizId: string) =>
//   useQuery({
//     queryKey: [`quiz/${quizId}/questions`],
//     queryFn: () => getQuestionsByQuiz(quizId),
//   });
