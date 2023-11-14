"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { EditQuizForm } from "@/src/components/Quizzes/edit_quiz_form";
import { getQuizById, quizType } from "@/src/fetch/quizzes/get_by_id";
import { getUserByIdType } from "@/src/fetch/user/get_user_by_id";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  quiz: quizType;
};

export const EditQuizModal = ({ quiz }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  if (!quiz) {
    return <p>Something went wrong</p>;
  }

  return (
    <Dialog
      open={pathname?.includes(`/profile/quizzes/${quiz.id}/edit`)}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <h1>Edit Quiz</h1>
        <EditQuizForm quiz={quiz} />
      </DialogContent>
    </Dialog>
  );
};
