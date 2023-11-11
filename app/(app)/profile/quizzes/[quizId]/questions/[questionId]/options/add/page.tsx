import { CreateOptionForm } from "@/src/components/Options/create_option_form";

type Props = {
  params: {
    quizId: string;
    questionId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>Add option</h1>
      <CreateOptionForm {...params} />
    </div>
  );
}
