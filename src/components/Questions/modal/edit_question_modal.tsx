"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { EditQuestionForm } from "@/src/components/Questions/edit_question_form";
import { getQuestionByIdType } from "@/src/fetch/questions/get_question_by_id";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  question: getQuestionByIdType;
};

export const EditQuestionModal = async ({ question }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Dialog
      open={pathname?.includes(
        `/profile/quizzes/${question.quiz_id}/questions/${question.id}/edit`
      )}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <h1>Edit Question</h1>
        <EditQuestionForm question={question} />
      </DialogContent>
    </Dialog>
  );
};
