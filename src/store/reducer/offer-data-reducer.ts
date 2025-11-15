import { createSlice } from '@reduxjs/toolkit';
import { TypeFullOffer } from '../../types/offer.ts';
import { changeFavoriteStatusAction, fetchOfferAction } from '../action/action.ts';

type OfferDataState = {
  offer: TypeFullOffer | null;
  isOfferLoading: boolean;
};

const initialState: OfferDataState = {
  offer: null,
  isOfferLoading: true,
};

const offerDataSlice = createSlice({
  name: 'offerData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferLoading = false;
        state.offer = null;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        if (state.offer && state.offer.id === updatedOffer.id) {
          state.offer.isFavorite = updatedOffer.isFavorite;
        }
      });
  },
});

export const offerDataReducer = offerDataSlice.reducer;
