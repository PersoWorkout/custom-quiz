import { getAuthSession } from "@/lib/auth";
import { CreateOptionForm } from "@/src/components/Options/create_option_form";
import { CreateOptionModal } from "@/src/components/Options/modal/create_option_modal";
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
    return <p>Question not found</p>;
  }

  return <CreateOptionModal question={question} />;
}
