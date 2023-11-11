export const defaultGet = {
  id: true,
  title: true,
  description: true,
  created_at: true,
  expired_at: true,
  user_id: true,
  user: {
    select: {
      name: true,
      email: true,
    },
  },
  _count: {
    select: {
      participants: true,
    },
  },
};

export const getQuestionType = {
  id: true,
  question: true,
  quiz_id: true,
  created_at: true,
};

export const getOptionType = {
  id: true,
  option: true,
  color: true,
  is_correct: true,
  question_id: true,
};

export const getQuestionWithOptionsType = {
  id: true,
  question: true,
  created_at: true,
  quiz_id: true,
  options: {
    select: { ...getOptionType },
  },
};
