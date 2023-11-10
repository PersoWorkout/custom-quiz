"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useTransition } from "react";
import { signIn } from "next-auth/react";
import { getAuthSession } from "@/lib/auth";
import { Session } from "next-auth";

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      size={"lg"}
      onClick={() => {
        startTransition(async () => {
          await signIn();
        });
      }}
    >
      {isPending ? <Loader className="mr-2 h-4 w-4" /> : <>Login</>}
    </Button>
  );
};
