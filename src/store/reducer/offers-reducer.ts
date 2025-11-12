import { createReducer } from '@reduxjs/toolkit';
import { TypeOffer } from '../../types/offer.ts';
import { changeFavoriteStatusAction, fetchOffersAction } from '../action/api-actions.ts';

type InitialState = {
  offers: TypeOffer[];
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  isOffersLoading: false,
};

const offersReducer = createReducer(initialState, (builder) => {
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
    })
    .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      if (index !== -1) {
        state.offers[index] = updatedOffer;
      }
    });
});

export { offersReducer };
