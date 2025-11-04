import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../../constants.ts';
import { offers } from '../../mocks/offers.ts';
import { TypeOffer } from '../../types/offer.ts';
import { nearbyOffers } from '../../mocks/nearby-offers.ts';
import { changeCity, loadOffers } from '../action/action.ts';

type InitialState = {
  city: string;
  offers: TypeOffer[];
  nearbyOffers: TypeOffer[];
};

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
  nearbyOffers: nearbyOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
