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
import { Switch } from "@/components/ui/switch";
import { editOption } from "@/src/fetch/options/edit_option";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionsOptions } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  option: z.string().optional(),
  is_correct: z.boolean().optional(),
  color: z.string().optional(),
});

type Props = {
  option: QuestionsOptions;
  quizId: string;
};

export const EditOptionForm = ({ option, quizId }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      option: option.option,
      is_correct: option.is_correct,
      color: option.color || "",
    },
  });

  const handleOnSubmit = (payload: z.infer<typeof formSchema>) => {
    editOption({ id: option.id, payload })
      .then(() => {
        toast.success("Option are updated");
        router.refresh();
        router.push(`/profile/quizzes/${quizId}`);
      })
      .catch((err) => {
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
