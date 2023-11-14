"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CreateQuestionForm } from "@/src/components/Questions/create_question_form";
import { quizType } from "@/src/fetch/quizzes/get_by_id";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  quizId: string;
};

export const CreateQuestionModal = ({ quizId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Dialog
      open={pathname?.includes(`profile/quizzes/${quizId}/questions/add`)}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <h1>Add a Question</h1>
        <CreateQuestionForm quizId={quizId} />
      </DialogContent>
    </Dialog>
  );
};
