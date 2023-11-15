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
import { editUserProfile } from "@/src/fetch/user/edit_user";
import { getUserProfileType } from "@/src/fetch/user/get_user_profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {
  user: getUserProfileType;
};

const formSchema = z.object({
  firstname: z.string().optional(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  image: z.string().url().optional(),
});

export const EditProfileForm = ({ user }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user.firstname || "",
      name: user.name || "",
      email: user.email || "",
      image: user.image || "",
    },
  });

  const handleSubmit = (payload: z.infer<typeof formSchema>) => {
    editUserProfile({ userId: user.id, payload })
      .then((data) => {
        toast.success("Your profile are updated");
        router.refresh();
        router.back();
      })
      .catch((err) => {
        toast.error("An error occured");
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="m-4 p-4 space-y-5"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input disabled={true} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};
