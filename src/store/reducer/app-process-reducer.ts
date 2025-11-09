import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../../constants.ts';
import { changeCity } from '../action/sort-action.ts';

type InitialState = {
  city: string;
};

const initialState: InitialState = {
  city: CITIES[0],
};

const appProcessReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export { appProcessReducer };
