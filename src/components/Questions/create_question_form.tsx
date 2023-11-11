"use client";

import { QuestionForm } from "@/src/components/Questions/question_form";
import { createQuestion } from "@/src/fetch/questions/create_question";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  question: z.string(),
});

type Props = {
  quizId: string;
};

export const CreateQuestionForm = ({ quizId }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  const handleOnSubmit = (payload: z.infer<typeof formSchema>) => {
    return createQuestion({ ...payload, quiz_id: quizId }).then((question) => {
      toast.success("question was created");
      router.refresh();
      router.push(`/profile/quizzes/${quizId}`);
    });
  };

  return <QuestionForm form={form} handleOnSubmit={handleOnSubmit} />;
};
