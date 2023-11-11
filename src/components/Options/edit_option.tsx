import { getAuthSession } from "@/lib/auth";
import { EditOptionForm } from "@/src/components/Options/edit_option_form";
import { getOptionById } from "@/src/fetch/options/get_option_by_id";

type Props = {
  quizId: string;
  optionId: string;
};

export const EditOption = async ({ quizId, optionId }: Props) => {
  const session = await getAuthSession();
  if (!session?.user.id) {
    return <p>You are not logged</p>;
  }

  const option = await getOptionById(optionId);
  if (option.question.quiz.user_id !== session.user.id) {
    return <p>You are not authorized</p>;
  }

  return <EditOptionForm quizId={quizId} option={option} />;
};
