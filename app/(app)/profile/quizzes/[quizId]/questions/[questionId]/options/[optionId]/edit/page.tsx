import { EditOption } from "@/src/components/Options/edit_option";

type Props = {
  params: { quizId: string; optionId: string };
};

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>Edit {params.optionId} option</h1>
      <EditOption {...params} />
    </div>
  );
}
