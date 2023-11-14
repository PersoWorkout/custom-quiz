import { getAuthSession } from "@/lib/auth";
import { EditQuizModal } from "@/src/components/Quizzes/modal/edit_quiz_modal";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";

interface Props {
  params: {
    quizId: string;
  };
}

export default async function Page({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  const quiz = await getQuizById(params.quizId);
  if (!quiz) {
    return <p>Something went wrong</p>;
  }

  return <EditQuizModal quiz={quiz} />;
}
