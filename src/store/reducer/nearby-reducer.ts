import { createReducer } from '@reduxjs/toolkit';
import { TypeOffer } from '../../types/offer.ts';
import { changeFavoriteStatusAction, fetchNearbyOffersAction } from '../action/action.ts';

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
    })
    .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      state.nearbyOffers.forEach((offer) => {
        if (offer.id === updatedOffer.id) {
          offer.isFavorite = updatedOffer.isFavorite;
        }
      });
    });
});

export { nearbyReducer };
