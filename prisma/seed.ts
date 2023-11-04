import { faker } from "@faker-js/faker";
import {
  PrismaClient,
  Users,
  Prisma,
  Quizzes,
  QuestionsOptions,
  Questions,
} from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const users: Array<Users> = [];
  const quizzes: Array<Quizzes> = [];
  const questions: Array<Questions> = [];
  const options: Array<QuestionsOptions> = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    } satisfies Prisma.UsersCreateInput;

    const createdUser = await prisma.users.create({
      data: user,
    });

    users.push(createdUser);
  }

  for (let i = 0; i < 10; i++) {
    const user = users[faker.number.int({ min: 0, max: users.length - 1 })];
    const quiz = {
      title: faker.lorem.sentence(faker.number.int({ min: 0, max: 15 })),
      description: faker.lorem.sentence(faker.number.int({ min: 1, max: 10 })),
      user_id: user.id,
    } as Quizzes;

    const createdQuiz = await prisma.quizzes.create({
      data: quiz,
    });
    quizzes.push(createdQuiz);
  }

  for (let i = 0; i < 10; i++) {
    const selectedQuizId = quizzes[i].id;
    const question = {
      question: faker.lorem.sentence(faker.number.int({ min: 2, max: 15 })),
      quiz_id: selectedQuizId,
    } as Questions;

    const createdQuestion = await prisma.questions.create({
      data: question,
    });
    questions.push(createdQuestion);
  }

  for (const q of questions) {
    const nbAnswer = faker.number.int({ min: 2, max: 4 });
    for (let k = 0; k < nbAnswer; k++) {
      const option = {
        option: faker.lorem.sentence(faker.number.int({ min: 1, max: 5 })),
        is_correct: faker.datatype.boolean(),
        question_id: q.id,
        color: faker.color.rgb(),
      } as QuestionsOptions;

      const createdOption = await prisma.questionsOptions.create({
        data: option,
      });
    }
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect;
    process.exit(1);
  });
