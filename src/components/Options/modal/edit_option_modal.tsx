"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { EditOptionForm } from "@/src/components/Options/edit_option_form";
import { getOptionByIdType } from "@/src/fetch/options/get_option_by_id";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  option: getOptionByIdType;
  quizId: string;
};

export const EditOptionModal = ({ option, quizId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Dialog
      open={pathname?.includes(
        `profile/quizzes/${quizId}/questions/${option.question_id}/options/${option.id}/edit`
      )}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <h1>Edit Option</h1>
        <EditOptionForm option={option} quizId={quizId} />
      </DialogContent>
    </Dialog>
  );
};
