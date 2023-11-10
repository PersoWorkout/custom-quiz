import { getAuthSession } from "@/lib/auth";
import { LoginButton } from "@/src/components/Auth/LoginButton";
import { UserProfileDropDown } from "@/src/components/Auth/UserProfileDropDown";
import { NavBar } from "@/src/components/NavBar";
import { ThemToogle } from "@/src/components/Themes/ThemToogle";

export const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="fixed top-0 flex justify-between bg-gradient-to-r from-purple-500 to-orange-500 h-20 w-full">
      <NavBar />
      <div className="w-auto my-auto mr-10 flex items-center gap-2">
        {!session ? <LoginButton /> : <UserProfileDropDown session={session} />}
        <ThemToogle />
      </div>
    </header>
  );
};
