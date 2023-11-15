import { getAuthSession } from "@/lib/auth";
import { EditProfileForm } from "@/src/components/Profile/edit_profile_form";
import { getUserProfile } from "@/src/fetch/user/get_user_profile";

export default async function Page() {
  const session = await getAuthSession();
  if (!session?.user.id || session.user.id === undefined) {
    return <p>You are not logged</p>;
  }

  const user = await getUserProfile(session?.user.id!);
  if (!user) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="m-4 p-4">
      <h1>Edit your profile</h1>
      <EditProfileForm user={user} />
    </div>
  );
}
