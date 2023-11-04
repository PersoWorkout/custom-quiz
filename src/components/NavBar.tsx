"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="fixed top-0 flex bg-red-600 h-20 w-full">
      <div className="flex gap-6 px-7">
        <Link href={"/"} className="my-auto text-xl">
          Home
        </Link>
        <Link href={"/"} className="my-auto text-xl">
          Home
        </Link>
        <Link href={"/"} className="my-auto text-xl">
          Home
        </Link>
      </div>
      <div className="relative container w-auto my-auto">
        <Button className="">Login</Button>
      </div>
    </div>
  );
};
