import { createReducer } from '@reduxjs/toolkit';
import { TypeOffer } from '../../types/offer.ts';
import { fetchOffersAction } from '../action/api-actions.ts';

type InitialState = {
  isOffersLoading: boolean;
  offers: TypeOffer[];
};

const initialState: InitialState = {
  offers: [],
  isOffersLoading: false,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersLoading = false;
    });
});

export { dataReducer };
