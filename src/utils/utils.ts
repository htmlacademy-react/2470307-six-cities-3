import { CAPITALIZE_INDEX, RATING_MULTIPLIER } from '../constants';

export const capitalize = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.charAt(CAPITALIZE_INDEX.firstLetter).toUpperCase() + str.slice(CAPITALIZE_INDEX.restOfString);
};

export const getRatingWidth = (rating: number): number => Math.round(rating) * RATING_MULTIPLIER;
