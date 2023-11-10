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
        <DropdownMenuItem asChild>
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <LogoutDropDownMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
