"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
    console.log(quizId);
    return createQuestion({ ...payload, quiz_id: quizId }).then((question) => {
      toast.success("question was created");
      router.push(`/quizzes/${quizId}/question/${question.id}/options/add`);
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="m-4 p-4 space-y-5"
        >
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="What color is a strawberry 🍓 ?"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </>
  );
};
