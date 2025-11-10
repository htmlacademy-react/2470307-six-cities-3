import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TypeFullOffer, TypeOffer } from '../../types/offer.ts';
import { AppDispatch } from '../hooks/hooks.ts';
import { APIRoute } from '../../constants.ts';
import { RootState } from '../reducer/root-reducer.ts';
import { AuthData, UserData } from '../../types/user.ts';
import { dropToken, saveToken } from '../../services/token.ts';
import { TypeReview, TypeReviewData } from '../../types/review.ts';

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

export const fetchOfferAction = createAsyncThunk<TypeFullOffer, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const url = `${APIRoute.Offers}/${offerId}`;
    const { data } = await api.get<TypeFullOffer>(url);
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

export const fetchReviewsAction = createAsyncThunk<TypeReview[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { extra: api }) => {
    const url = `${APIRoute.Comments}/${offerId}`;
    const { data } = await api.get<TypeReview[]>(url);
    return data;
  },
);

export const postReviewAction = createAsyncThunk<TypeReview, { reviewData: TypeReviewData; offerId: string }, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async ({ reviewData, offerId }, { extra: api }) => {
    const url = `${APIRoute.Comments}/${offerId}`;
    const { data } = await api.post<TypeReview>(url, reviewData);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData & { token: string }>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
