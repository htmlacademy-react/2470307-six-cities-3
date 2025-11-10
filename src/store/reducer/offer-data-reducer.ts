import { createSlice } from '@reduxjs/toolkit';
import { TypeFullOffer } from '../../types/offer';
import { fetchOfferAction } from '../action/api-actions';

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
      });
  },
});

export const offerDataReducer = offerDataSlice.reducer;
