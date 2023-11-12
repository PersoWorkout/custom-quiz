import { Button } from "@/components/ui/button";
import { QuestionCard } from "@/src/components/Questions/question_card";
import { getQuizById } from "@/src/fetch/quizzes/get_by_id";

type Props = {
  params: {
    quizId: string;
  };
};

export default async function Page({ params }: Props) {
  const quiz = await getQuizById(params.quizId);
  return (
    <div className="m-4 p-4">
      <h1>
        Welcome to <b>{quiz?.title}</b>
      </h1>

      <div className="ml-10 mt-10 space-y-9 max-w-screen-lg">
        <h2 className="text-lg">{quiz?.description}</h2>
        {quiz?.questions.map((question, index) => (
          <QuestionCard
            mode="read"
            question={question}
            index={index + 1}
            key={question.id}
          />
        ))}
        <Button className="m-20" size={"lg"}>
          Save
        </Button>
      </div>
    </div>
  );
}
