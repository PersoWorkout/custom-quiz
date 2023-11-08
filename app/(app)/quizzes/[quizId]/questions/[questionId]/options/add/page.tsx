import { CreateOptionForm } from "@/src/components/Options/create_option_form";

type Props = {
  params: {
    questionId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="m-4 font-bold text-2xl">
      <h1>Add a Question</h1>
      <CreateOptionForm questionId={params.questionId} />
    </div>
  );
}
