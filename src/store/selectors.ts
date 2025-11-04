import { RootState } from './hooks/hooks.ts';
import { createSelector } from '@reduxjs/toolkit';
import { NEAR_PLACES_COUNT } from '../constants.ts';

const selectOffers = (state: RootState) => state.offers;
const selectCity = (state: RootState) => state.city;
const selectNearbyOffers = (state: RootState) => state.nearbyOffers;

export const selectCurrentOffers = createSelector(
  [selectOffers, selectCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const selectFavoriteOffers = createSelector(
  [selectOffers],
  (offers) => offers.filter((offer) => offer.isFavorite)
);

export const selectFilteredNearbyOffers = createSelector(
  [selectNearbyOffers, (_state: RootState, offerId: string | undefined) => offerId],
  (nearby, offerId) =>
    nearby
      .filter((offer) => offer.id !== offerId)
      .slice(0, NEAR_PLACES_COUNT)
);

export const selectOfferById = createSelector(
  [selectOffers, (_state: RootState, offerId: string | undefined) => offerId],
  (offers, offerId) => offers.find((offer) => offer.id === offerId)
);
