import { getAuthSession } from "@/lib/auth";
import { CreateQuizForm } from "@/src/components/Quizzes/create_quiz_form";

export default async function Page() {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  return <CreateQuizForm />;
}
