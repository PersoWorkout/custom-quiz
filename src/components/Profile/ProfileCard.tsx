import { getUserByIdType } from "@/src/fetch/user/get_user_by_id";
import Image from "next/image";

type Props = {
  user: getUserByIdType;
};

export const ProfileCard = ({ user }: Props) => {
  return (
    <div className="flex gap-2">
      <div>
        <Image
          src={user?.image || ""}
          alt="avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      <div className="space-y-5 text-lg mt-10">
        <div className="flex gap-2">
          <label>Firstname:</label>
          <h2>{user?.name}</h2>
        </div>
        <div className="flex gap-2">
          <label>Lastname:</label>
          <h2>{}</h2>
        </div>
        <div className="flex gap-2">
          <label>Email:</label>
          <h2>{user?.email}</h2>
        </div>
        <div className="flex gap-2">
          <label>Quizzes:</label>
          <h2>{user?._count.quizzes}</h2>
        </div>
      </div>
    </div>
  );
};
