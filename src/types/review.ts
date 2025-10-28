export type TypeUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TypeReview = {
  id: string;
  date: string;
  user: TypeUser;
  comment: string;
  rating: number;
};
