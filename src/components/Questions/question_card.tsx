import { Button } from "@/components/ui/button";
import { OptionItem } from "@/src/components/Options/option_item";
import type { questionWithOptionType } from "@/src/fetch/questions/get_questions_by_quiz";
import Link from "next/link";

type Props = {
  question: questionWithOptionType;
  index: number;
  mode: "read" | "edit";
};

export const QuestionCard = ({ question, index, mode }: Props) => {
  return (
    <div className="flex w-full items-center">
      <div className="w-8/12">
        <div className="inline-flex justify-between w-full">
          <p>
            <b>{index}.</b> {question.question}
          </p>
          {mode === "edit" && (
            <Link
              href={`/profile/quizzes/${question.quiz_id}/questions/${question.id}/edit`}
            >
              <Button>Edit</Button>
            </Link>
          )}
        </div>

        <div className="border-separate space-y-2 w-full mt-5">
          {question.options.map((option) => (
            <OptionItem
              quizId={question.quiz_id}
              option={option}
              mode={mode}
              key={option.id}
            />
          ))}
        </div>

        {mode === "edit" && (
          <Button size={"sm"} className="m-4">
            <Link
              href={`/profile/quizzes/${question.quiz_id}/questions/${question.id}/options/add`}
            >
              + Option
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
