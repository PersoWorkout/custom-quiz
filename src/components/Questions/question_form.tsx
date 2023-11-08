import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<any>;
  handleOnSubmit: SubmitHandler<any>;
}

export const QuestionForm = ({ form, handleOnSubmit }: Props) => {
  return (
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
  );
};
