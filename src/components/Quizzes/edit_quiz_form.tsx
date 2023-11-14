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
import { Textarea } from "@/components/ui/textarea";
import { editQuiz } from "@/src/fetch/quizzes/edit_quiz";
import { quizType } from "@/src/fetch/quizzes/get_by_id";
import { zodResolver } from "@hookform/resolvers/zod";
import { Quizzes } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface Props {
  quiz: quizType;
}
const quizFormSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

export const EditQuizForm = ({ quiz }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof quizFormSchema>>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {
      title: quiz.title,
      description: quiz.description,
    },
  });

  const handleOnSubmit = (payload: z.infer<typeof quizFormSchema>) => {
    editQuiz({ quizId: quiz.id, payload })
      .then((data) => {
        toast.success("quiz are updated");
        router.refresh();
        router.push(`/profile/quizzes/${quiz.id}`);
      })
      .catch((error) => {
        toast.error("An error occured");
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="m-4 p-4 space-y-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" size={"lg"}>
          Save
        </Button>
      </form>
    </Form>
  );
};
