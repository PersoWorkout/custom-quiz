"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { createQuestionOption } from "@/src/fetch/options/create_options";
import { getQuestionByIdType } from "@/src/fetch/questions/get_question_by_id";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {
  question: getQuestionByIdType;
};

const formSchema = z.object({
  option: z.string(),
  color: z.string(),
  is_correct: z.boolean(),
});

export const CreateOptionForm = ({ question }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      is_correct: false,
      color: "168 85 247 / 0",
    },
  });

  const handleSubmitForm = (payload: z.infer<typeof formSchema>) => {
    createQuestionOption({ ...payload, question_id: question.id }).then(
      (data) => {
        toast.success("option was added");
        router.refresh();
        router.push(`/profile/quizzes/${question.quiz_id}`);
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="m-4 p-4 space-y-5"
      >
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Option</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input {...field} type="color" className="w-10 p-1.5" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="is_correct"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Is correct</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};
