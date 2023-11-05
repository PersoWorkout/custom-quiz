"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { createQuiz } from "@/src/fetch/quizzes/create_quiz";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const CreateQuizForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const handleOnSubmit = async (payload: z.infer<typeof formSchema>) => {
    console.log("submiting");
    await createQuiz({
      ...payload,
      user_id: "clol8e4080000ma2w5gw6f6gk",
    })
      .then((quiz) => {
        console.log(quiz);
        toast.success("Quiz created");
        router.push(`/quizzes/${quiz.id}/questions/add`);
      })
      .catch((error) => {
        console.log(error);
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
