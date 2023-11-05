"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="fixed top-0 flex justify-between bg-gradient-to-r from-purple-500 to-orange-500 h-20 w-full">
      <div className="flex gap-6 px-7 text-white">
        <Link href={"/"} className="my-auto text-xl">
          Quizzes
        </Link>
        <Link href={"/"} className="my-auto text-xl">
          Create
        </Link>
        <Link href={"/"} className="my-auto text-xl">
          Account
        </Link>
      </div>
      <div className="w-auto my-auto mr-10">
        <Button className="">Login</Button>
      </div>
    </div>
  );
};
