import { UserData } from './user';

export type TypeReview = {
  id: string;
  date: string;
  user: Omit<UserData, 'email'> & { name: string };
  comment: string;
  rating: number;
};

export type ReviewData = {
  comment: string;
  rating: number;
};
