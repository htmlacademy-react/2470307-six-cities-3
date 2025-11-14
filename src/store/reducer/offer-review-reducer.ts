import { createSlice } from '@reduxjs/toolkit';
import { TypeReview } from '../../types/review.ts';
import { fetchReviewsAction, postReviewAction } from '../action/api-actions.ts';

type OfferReviewState = {
  reviews: TypeReview[];
  isReviewSending: boolean;
  reviewSendError: boolean;
};

const initialState: OfferReviewState = {
  reviews: [],
  isReviewSending: false,
  reviewSendError: false,
};

const offerReviewSlice = createSlice({
  name: 'offerReview',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.isReviewSending = true;
        state.reviewSendError = false;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isReviewSending = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewSending = false;
        state.reviewSendError = true;
      });
  },
});

export const offerReviewReducer = offerReviewSlice.reducer;
