"use client";

import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex gap-6 px-7 text-white">
      <Link href={"/"} className="my-auto text-xl">
        Quizzes
      </Link>
      <Link href={"/quizzes/add"} className="my-auto text-xl">
        Create
      </Link>
      <Link href={"/"} className="my-auto text-xl">
        Account
      </Link>
    </div>
  );
};
