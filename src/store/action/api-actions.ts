import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TypeOffer } from '../../types/offer.ts';
import { AppDispatch } from '../hooks/hooks.ts';
import { APIRoute } from '../../constants.ts';
import { RootState } from '../reducer/root-reducer.ts';

export const fetchOffersAction = createAsyncThunk<TypeOffer[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TypeOffer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<TypeOffer[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, { extra: api }) => {
    const url = `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`;
    const { data } = await api.get<TypeOffer[]>(url);
    return data;
  },
);
