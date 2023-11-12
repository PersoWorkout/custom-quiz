import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { QuestionsOptions } from "@prisma/client";
import { CheckCircle2, PenSquare, XCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  quizId: string;
  option: QuestionsOptions;
  mode: "read" | "edit";
};

export const OptionItem = ({ quizId, option, mode }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 w-full">
      {mode === "read" ? (
        <Checkbox className={``} />
      ) : option.is_correct ? (
        <CheckCircle2 className="text-green-700" />
      ) : (
        <XCircle className="text-red-600" />
      )}
      <div className="space-y-1 leading-none w-full">
        <Label>{option.option}</Label>
      </div>

      {mode === "edit" ? (
        <Link
          href={`/profile/quizzes/${quizId}/questions/${option.question_id}/options/${option.id}/edit`}
        >
          <PenSquare className="h-6 w-6 hover:cursor-pointer" />
        </Link>
      ) : null}
    </div>
  );
};
