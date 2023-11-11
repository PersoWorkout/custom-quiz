"use client";

import { QuestionForm } from "@/src/components/Questions/question_form";
import { editQuestion } from "@/src/fetch/questions/edit_question";
import { zodResolver } from "@hookform/resolvers/zod";
import { Prisma, Questions } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  question: z.string(),
});

type Props = {
  question: Questions;
};

export const EditQuestionForm = ({ question }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: question.question || "",
    },
  });

  const handleOnSubmit = (payload: z.infer<typeof formSchema>) => {
    return editQuestion({ ...payload, questionId: question.id }).then(
      (data) => {
        toast.success("question was updated");
        router.refresh();
        router.push(`/quizzes/${data.quiz_id}`);
      }
    );
  };

  return <QuestionForm form={form} handleOnSubmit={handleOnSubmit} />;
};
