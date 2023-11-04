-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "expired_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizsParticipants" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,

    CONSTRAINT "QuizsParticipants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quizs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expired_at" TIMESTAMP(3),

    CONSTRAINT "Quizs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizsQuestions" (
    "id" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,

    CONSTRAINT "QuizsQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionsOptions" (
    "id" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "color" TEXT,
    "is_correct" BOOLEAN NOT NULL,

    CONSTRAINT "QuestionsOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipantsResponses" (
    "question_option_id" TEXT NOT NULL,
    "participant_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Questions_quiz_id_key" ON "Questions"("quiz_id");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantsResponses_question_option_id_key" ON "ParticipantsResponses"("question_option_id");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantsResponses_participant_id_key" ON "ParticipantsResponses"("participant_id");

-- AddForeignKey
ALTER TABLE "QuizsParticipants" ADD CONSTRAINT "QuizsParticipants_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quizs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizsParticipants" ADD CONSTRAINT "QuizsParticipants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quizs" ADD CONSTRAINT "Quizs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizsQuestions" ADD CONSTRAINT "QuizsQuestions_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "Quizs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizsQuestions" ADD CONSTRAINT "QuizsQuestions_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionsOptions" ADD CONSTRAINT "QuestionsOptions_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantsResponses" ADD CONSTRAINT "ParticipantsResponses_question_option_id_fkey" FOREIGN KEY ("question_option_id") REFERENCES "QuestionsOptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantsResponses" ADD CONSTRAINT "ParticipantsResponses_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "QuizsParticipants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
