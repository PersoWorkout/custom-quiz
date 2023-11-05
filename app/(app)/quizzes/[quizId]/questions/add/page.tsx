import { CreateQuestionForm } from "@/src/components/Questions/create_question_form";

type Props = {
  quizId: string;
};

export default function Page({ quizId }: Props) {
  return (
    <div className="m-4 font-bold text-2xl">
      <h1>New Quiz</h1>
      <CreateQuestionForm quizId={quizId} />
    </div>
  );
}
