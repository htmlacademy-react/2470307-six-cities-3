import { UserData } from './user.ts';

export type TypeReview = {
  id: string;
  date: string;
  user: Omit<UserData, 'email'> & { name: string };
  comment: string;
  rating: number;
};

export type TypeReviewData = {
  comment: string;
  rating: number;
};
