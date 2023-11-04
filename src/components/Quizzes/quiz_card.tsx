"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/date";
import { QuizHome } from "@/src/fetch/quizzes/get_all";

type Props = {
  quiz: QuizHome;
};

export const QuizCard = ({ quiz }: Props) => {
  return (
    <Card>
      <CardTitle>{quiz.title}</CardTitle>
      <CardContent>{quiz.description}</CardContent>
      <CardFooter>{formatDate(quiz.created_at)}</CardFooter>
    </Card>
  );
};
