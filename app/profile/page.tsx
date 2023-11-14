import { getAuthSession } from "@/lib/auth";
import { ProfileCard } from "@/src/components/Profile/ProfileCard";
import { getUserById } from "@/src/fetch/user/get_user_by_id";

export default async function Page() {
  const session = await getAuthSession();
  if (!session?.user.id) {
    return <p>You are not logged</p>;
  }

  const user = await getUserById(session?.user.id);
  if (!user) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="m-4 p-4">
      <h1>Welcome to your profile</h1>
      <div className="ml-10 mt-10">
        <ProfileCard user={user} />
      </div>
    </div>
  );
}
