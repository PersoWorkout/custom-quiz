import { getAuthSession } from "@/lib/auth";
import { CreateQuestionForm } from "@/src/components/Questions/create_question_form";
import { getQuestionById } from "@/src/fetch/questions/get_question_by_id";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";
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
      <h1>Add a Question</h1>
      <CreateQuestionForm quizId={params.quizId} />
    </div>
  );
}
