import { getAuthSession } from "@/lib/auth";
import { EditQuestion } from "@/src/components/Questions/edit_question";
import { getQuestionById } from "@/src/fetch/questions/get_question_by_id";
import { notFound } from "next/navigation";

type Props = {
  params: {
    questionId: string;
  };
};

export default async function Page({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  const question = await getQuestionById(params.questionId);
  if (!question) {
    return notFound();
  }

  return (
    <div className="m-4 p-4">
      <h1>Edit Question {params.questionId}</h1>
      <EditQuestion questionId={params.questionId} />
    </div>
  );
}
