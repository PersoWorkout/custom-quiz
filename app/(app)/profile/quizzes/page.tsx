import { getAuthSession } from "@/lib/auth";
import { QuizCard } from "@/src/components/Quizzes/quiz_card";
import { getQuizzesByUser } from "@/src/fetch/quizzes/qet_quizzes_by_user";
import Link from "next/link";

export default async function Page() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return <p>You are not logged</p>;
  }

  const quizzes = await getQuizzesByUser(session?.user?.id);
  return (
    <div className="m-4 p-4 space-y-10">
      <h1 className="">Your Quizzes</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {quizzes.map((quiz) => (
          <Link href={`/profile/quizzes/${quiz.id}`} key={quiz.id}>
            <QuizCard quiz={quiz} />
          </Link>
        ))}
      </div>
    </div>
  );
}
