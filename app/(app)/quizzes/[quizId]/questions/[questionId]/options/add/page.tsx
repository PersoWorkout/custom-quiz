import { CreateOptionForm } from "@/src/components/Options/create_option_form";

type Props = {
  params: {
    quizId: string;
    questionId: string;
  };
};

export default function Page({ params }: Props) {
  console.log(params.quizId);
  return (
    <div className="m-4 font-bold text-2xl">
      <h1>Add a Question</h1>
      <CreateOptionForm {...params} />
    </div>
  );
}
