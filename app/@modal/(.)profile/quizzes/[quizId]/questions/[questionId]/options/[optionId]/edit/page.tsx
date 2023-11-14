import { getAuthSession } from "@/lib/auth";
import { EditOptionModal } from "@/src/components/Options/modal/edit_option_modal";
import { getOptionById } from "@/src/fetch/options/get_option_by_id";

type Props = {
  params: {
    quizId: string;
    optionId: string;
  };
};

export default async function Page({ params }: Props) {
  const session = await getAuthSession();
  if (!session) {
    return <p>You are not logged</p>;
  }

  const option = await getOptionById(params.optionId);
  if (!option) {
    return <p>Something went wrong</p>;
  }

  return <EditOptionModal option={option} quizId={params.quizId} />;
}
