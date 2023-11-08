import { getQuizById } from "@/src/fetch/quizzes/qet_by_id";

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

      <div className="ml-5">
        <p>{quiz?.description}</p>
        {quiz?.questions.map((question, index) => (
          <div className="mt-10">
            <p>
              <b>{index + 1}.</b> {question.question}
            </p>
            {question.options.map((option) => (
              <li className="ml-5">{option.option}</li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
