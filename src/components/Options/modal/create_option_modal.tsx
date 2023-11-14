"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CreateOptionForm } from "@/src/components/Options/create_option_form";
import { getQuestionByIdType } from "@/src/fetch/questions/get_question_by_id";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  question: getQuestionByIdType;
};

export const CreateOptionModal = ({ question }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Dialog
      open={pathname?.includes(
        `profile/quizzes/${question.quiz_id}/questions/${question.id}/options/add`
      )}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <h1>Add Option</h1>
        <CreateOptionForm question={question} />
      </DialogContent>
    </Dialog>
  );
};
