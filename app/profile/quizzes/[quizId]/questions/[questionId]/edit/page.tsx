import { EditQuestion } from "@/src/components/Questions/edit_question";

type Props = {
  params: {
    questionId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <>
      <h1>Edit Question {params.questionId}</h1>
      <EditQuestion questionId={params.questionId} />
    </>
  );
}
