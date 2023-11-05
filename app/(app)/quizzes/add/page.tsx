import { CreateQuizForm } from "@/src/components/Quizzes/create_quiz_form";

export default function Page() {
  return (
    <div className="m-4 font-bold text-2xl">
      <h1>New Quiz</h1>
      <CreateQuizForm />
    </div>
  );
}
