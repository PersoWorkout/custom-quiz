export const defaultGet = {
  id: true,
  title: true,
  description: true,
  created_at: true,
  expired_at: true,
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
