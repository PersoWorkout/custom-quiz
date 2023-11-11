"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { LogoutDropDownMenuItem } from "@/src/components/Auth/LogoutDropDownItem";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { User2 } from "lucide-react";
import Link from "next/link";
import type { Session } from "next-auth";

interface Props {
  session: Session | null;
}

export const UserProfileDropDown = ({ session }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"lg"}>{session?.user.name ?? ""}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={"/profile"} className="inline-flex gap-2">
            <User2 className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/profile/quizzes`}>My Quizzes</Link>
        </DropdownMenuItem>
        <LogoutDropDownMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
