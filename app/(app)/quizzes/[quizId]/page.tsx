import { getQuizById } from "@/src/fetch/quizzes/qet_by_id";

type Props = {
  quizId: string;
};

export default async function Page({ quizId }: Props) {
  const quiz = await getQuizById(quizId);
  return (
    <h1 className="text-2xl">
      Welcome to the <b>{quiz?.title}</b> Quiz
    </h1>
  );
}
