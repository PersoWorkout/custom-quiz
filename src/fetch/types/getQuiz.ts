export const defaultGet = {
  id: true,
  title: true,
  description: true,
  created_at: true,
  expired_at: true,
  user: {
    select: {
      firstname: true,
      lastname: true,
      email: true,
    },
  },
  _count: {
    select: {
      participants: true,
    },
  },
};
