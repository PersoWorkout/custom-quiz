import { EditQuestion } from "@/src/components/Questions/edit_question";

type Props = {
  params: {
    questionId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="m-4 font-bold text-2xl">
      <h1>Edit the Question</h1>
      <EditQuestion questionId={params.questionId} />
    </div>
  );
}
