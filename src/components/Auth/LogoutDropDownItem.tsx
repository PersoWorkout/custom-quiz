import { Loader } from "@/components/ui/loader";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import { useTransition } from "react";

export const LogoutDropDownMenuItem = () => {
  const [isPending, setTransition] = useTransition();
  return (
    <DropdownMenuItem
      onClick={() => {
        setTransition(() => signOut());
      }}
    >
      {isPending ? <Loader className="mr-2 h-4 w-4" /> : <>Log out</>}
    </DropdownMenuItem>
  );
};
