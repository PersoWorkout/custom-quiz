import { EditQuizForm } from "@/src/components/Quizzes/edit_quiz_form";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";

interface Props {
  quizId: string;
}

export const EditQuiz = async ({ quizId }: Props) => {
  const quiz = await getQuizById(quizId);

  if (!quiz) {
    return <p>Something went wrong</p>;
  }

  return <EditQuizForm quiz={quiz} />;
};
