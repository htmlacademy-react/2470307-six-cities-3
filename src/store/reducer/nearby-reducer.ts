import { createReducer } from '@reduxjs/toolkit';
import { TypeOffer } from '../../types/offer.ts';
import { fetchNearbyOffersAction } from '../action/api-actions.ts';

type InitialState = {
  isNearbyOffersLoading: boolean;
  nearbyOffers: TypeOffer[];
};

const initialState: InitialState = {
  isNearbyOffersLoading: false,
  nearbyOffers: [],
};

const nearbyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchNearbyOffersAction.pending, (state) => {
      state.isNearbyOffersLoading = true;
    })
    .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isNearbyOffersLoading = false;
    })
    .addCase(fetchNearbyOffersAction.rejected, (state) => {
      state.isNearbyOffersLoading = false;
    });
});

export { nearbyReducer };
