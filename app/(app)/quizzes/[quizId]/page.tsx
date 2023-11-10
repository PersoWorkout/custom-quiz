import { Button } from "@/components/ui/button";
import { getQuizById } from "@/src/fetch/quizzes/qet_by_id";
import Link from "next/link";

type Props = {
  params: {
    quizId: string;
  };
};

export default async function Page({ params }: Props) {
  const quiz = await getQuizById(params.quizId);
  return (
    <div className="m-4 space-y-5">
      <h1 className="text-2xl">
        Welcome to <b>{quiz?.title}</b>
      </h1>

      <div className="ml-5 space-y-9 max-w-3xl">
        <h2 className="text-lg">{quiz?.description}</h2>
        {quiz?.questions.map((question, index) => (
          <div className="flex w-full items-center justify-between" key={index}>
            <div>
              <p>
                <b>{index + 1}.</b> {question.question}
              </p>
              {question.options.map((option, index) => (
                <li className="ml-5" key={index}>
                  {option.option}
                </li>
              ))}
            </div>
            <div className="w-auto mr-10">
              <Button>
                <Link
                  href={`/quizzes/${params.quizId}/questions/${question.id}/edit`}
                >
                  Edit
                </Link>
              </Button>
            </div>
          </div>
        ))}
        <Button className="my-6">
          <Link href={`/quizzes/${params.quizId}/questions/add`}>
            + Question
          </Link>
        </Button>
      </div>
    </div>
  );
}
