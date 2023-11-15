import { getAuthSession } from "@/lib/auth";
import { EditOption } from "@/src/components/Options/edit_option";
import { getOptionById } from "@/src/fetch/options/get_option_by_id";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";
import { notFound } from "next/navigation";

type Props = {
  params: { quizId: string; optionId: string };
};

export default async function Page({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  const quiz = await getQuizById(params.quizId);
  if (!quiz) {
    return notFound();
  }

  const option = await getOptionById(params.optionId);
  if (!option) {
    return notFound();
  }

  return (
    <div>
      <h1>Edit {params.optionId} option</h1>
      <EditOption {...params} />
    </div>
  );
}
