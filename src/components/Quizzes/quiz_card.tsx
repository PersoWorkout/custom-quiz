"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/date";
import { QuizHome } from "@/src/fetch/quizzes/get_all";

type Props = {
  quiz: QuizHome;
};

export const QuizCard = ({ quiz }: Props) => {
  return (
    <Card className="h-full">
      <div className="m-2 p-1.5 h-[75%]">
        <CardTitle>{quiz.title}</CardTitle>
        <CardContent className="mt-4">{quiz.description}</CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <p className="col-span-1">{quiz.user.name}</p>
        <p className="">{formatDate(quiz.created_at)}</p>
      </CardFooter>
    </Card>
  );
};
