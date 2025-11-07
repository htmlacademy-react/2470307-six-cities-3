import { RootState } from './reducer/root-reducer.ts';
import { createSelector } from '@reduxjs/toolkit';
import { NEAR_PLACES_COUNT, SortType } from '../constants.ts';
import { TypeOffer } from '../types/offer.ts';

const selectOffers = (state: RootState) => state.data.offers;
const selectCity = (state: RootState) => state.process.city;
const selectNearbyOffers = (state: RootState) => state.nearby.nearbyOffers;

export const selectOffersLoadingStatus = (state: RootState) => state.data.isOffersLoading;

export const selectCurrentOffers = createSelector(
  [selectOffers, selectCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const selectSortType = (state: RootState) => state.sort.currentSortType;

export const selectSortedOffers = createSelector(
  [selectCurrentOffers, selectSortType],
  (offers, sortType) => {
    switch (sortType) {
      case SortType.PriceLowToHigh:
        return [...offers].sort((a, b) => a.price - b.price);
      case SortType.PriceHighToLow:
        return [...offers].sort((a, b) => b.price - a.price);
      case SortType.TopRatedFirst:
        return [...offers].sort((a, b) => b.rating - a.rating);
      case SortType.Popular:
      default:
        return offers;
    }
  }
);


export const selectFavoriteOffers = createSelector(
  [selectOffers],
  (offers) => offers.filter((offer) => offer.isFavorite)
);

export const selectFilteredNearbyOffers = createSelector(
  [selectNearbyOffers, (_state: RootState, offerId: TypeOffer['id'] | undefined) => offerId],
  (nearby, offerId) =>
    nearby
      .filter((offer) => offer.id !== offerId)
      .slice(0, NEAR_PLACES_COUNT)
);

export const selectOfferById = createSelector(
  [selectOffers, (_state: RootState, offerId: TypeOffer['id'] | undefined) => offerId],
  (offers, offerId) => offers.find((offer) => offer.id === offerId)
);
