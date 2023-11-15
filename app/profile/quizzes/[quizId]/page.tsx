import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { QuestionCard } from "@/src/components/Questions/question_card";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    quizId: string;
  };
};

export default async function Page({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  const quiz = await getQuizById(params.quizId);
  if (!quiz) {
    return notFound();
  }

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

      <div className="ml-10 mt-10 space-y-9 max-w-screen-xl">
        <h2 className="text-xl w-8/12">{quiz?.description}</h2>
        {quiz?.questions.map((question, index) => (
          <QuestionCard
            mode="edit"
            question={question}
            index={index + 1}
            key={question.id}
          />
        ))}
        <Button className="m-20" size={"lg"}>
          <Link href={`/profile/quizzes/${params.quizId}/questions/add`}>
            + Question
          </Link>
        </Button>
      </div>
    </div>
  );
}
