import { Button } from "@/components/ui/button";
import { OptionItem } from "@/src/components/Options/option_item";
import { QuestionCard } from "@/src/components/Questions/question_card";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";
import { PenSquare, PlusCircle, PlusIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  params: {
    quizId: string;
  };
};

export default async function Page({ params }: Props) {
  const quiz = await getQuizById(params.quizId);
  return (
    <div className="m-4 p-4">
      <div className="flex justify-between w-full items-center">
        <h1>
          Welcome to <b>{quiz?.title}</b>
        </h1>
        <Link href={`/profile/quizzes/${params.quizId}/edit`}>
          <Button size={"lg"}>Edit</Button>
        </Link>
      </div>

      <div className="ml-10 mt-10 space-y-9 min-w-10/12">
        <h2 className="text-lg w-4/6">{quiz?.description}</h2>
        {quiz?.questions.map((question, index) => (
          <QuestionCard
            mode="edit"
            question={question}
            index={index + 1}
            key={question.id}
          />
        ))}
        <Button className="m-20">
          <Link href={`/profile/quizzes/${params.quizId}/questions/add`}>
            + Question
          </Link>
        </Button>
      </div>
    </div>
  );
}
