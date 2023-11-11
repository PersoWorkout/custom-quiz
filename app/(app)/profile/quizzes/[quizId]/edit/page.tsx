import { EditQuiz } from "@/src/components/Quizzes/edit_quiz";

interface Props {
  params: {
    quizId: string;
  };
}

export default function Page({ params }: Props) {
  return (
    <div className="m-4 text-2xl">
      <h1>My Quizzes</h1>
      <EditQuiz quizId={params.quizId} />
    </div>
  );
}
