/*
  Warnings:

  - You are about to drop the `_QuestionsToQuizzes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_QuestionsToQuizzes" DROP CONSTRAINT "_QuestionsToQuizzes_A_fkey";

-- DropForeignKey
ALTER TABLE "_QuestionsToQuizzes" DROP CONSTRAINT "_QuestionsToQuizzes_B_fkey";

-- DropIndex
DROP INDEX "Questions_quiz_id_key";

-- AlterTable
ALTER TABLE "ParticipantsResponses" ADD CONSTRAINT "ParticipantsResponses_pkey" PRIMARY KEY ("question_option_id", "participant_id");

-- DropTable
DROP TABLE "_QuestionsToQuizzes";

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quizzes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
