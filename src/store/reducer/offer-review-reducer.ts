import { createSlice } from '@reduxjs/toolkit';
import { Review } from '../../types/review';
import { fetchReviewsAction, postReviewAction } from '../action/api-actions';

type OfferReviewState = {
  reviews: Review[];
  isReviewSubmitting: boolean;
};

const initialState: OfferReviewState = {
  reviews: [],
  isReviewSubmitting: false,
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
        state.isReviewSubmitting = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isReviewSubmitting = false;
      });
  },
});

export const offerReviewReducer = offerReviewSlice.reducer;
