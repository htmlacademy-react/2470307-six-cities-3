import { createAction } from '@reduxjs/toolkit';
import { TypeOffer } from '../../types/offer.ts';

export const changeCity = createAction<string>('city/change');

export const loadOffers = createAction<TypeOffer[]>('offers/load');
