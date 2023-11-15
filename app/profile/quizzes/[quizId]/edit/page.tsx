import { getAuthSession } from "@/lib/auth";
import { EditQuiz } from "@/src/components/Quizzes/edit_quiz";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";
import { notFound } from "next/navigation";

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
    return notFound();
  }

  return (
    <div className="m-4 text-2xl">
      <h1>My Quizzes</h1>
      <EditQuiz quizId={params.quizId} />
    </div>
  );
}
