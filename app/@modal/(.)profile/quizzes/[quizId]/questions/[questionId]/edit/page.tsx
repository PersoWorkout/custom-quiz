import { getAuthSession } from "@/lib/auth";
import { EditQuestionModal } from "@/src/components/Questions/modal/edit_question_modal";
import { getQuestionById } from "@/src/fetch/questions/get_question_by_id";

type Props = {
  params: {
    questionId: string;
  };
};

export default async function Page({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  const question = await getQuestionById(params.questionId);
  if (!question) {
    return <p>Something went wrong</p>;
  }

  return <EditQuestionModal question={question} />;
}
