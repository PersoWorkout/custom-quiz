import { getAuthSession } from "@/lib/auth";
import { NavBar } from "@/src/components/NavBar";
import { QuizCard } from "@/src/components/Quizzes/quiz_card";
import { getAllQuizes } from "@/src/fetch/quizzes/get_all";
import Link from "next/link";

export default async function Home() {
  const quizzes = await getAllQuizes();
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
      {quizzes.map((quiz) => (
        <Link href={`/quizzes/${quiz.id}`} key={quiz.id}>
          <QuizCard quiz={quiz} />
        </Link>
      ))}
    </div>
  );
}
