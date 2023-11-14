import { getAuthSession } from "@/lib/auth";
import { CreateQuestionModal } from "@/src/components/Questions/modal/create_question_modal";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";

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
    return <p>Quiz not found</p>;
  }

  return <CreateQuestionModal quizId={params.quizId} />;
}
