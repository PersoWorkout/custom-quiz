import { EditQuestionForm } from "@/src/components/Questions/edit_question_form";
import { getQuestionById } from "@/src/fetch/questions/get_question_by_id";

export const EditQuestion = async ({ questionId }: { questionId: string }) => {
  const question = await getQuestionById(questionId);
  if (!question) {
    return <p>Something went wrong</p>;
  }

  return <EditQuestionForm question={question} />;
};
