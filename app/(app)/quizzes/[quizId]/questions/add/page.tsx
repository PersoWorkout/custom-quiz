import { CreateQuestionForm } from "@/src/components/Questions/create_question_form";

type Props = {
  params: {
    quizId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="m-4 font-bold text-2xl">
      <h1>Add a Question</h1>
      <CreateQuestionForm quizId={params.quizId} />
    </div>
  );
}
