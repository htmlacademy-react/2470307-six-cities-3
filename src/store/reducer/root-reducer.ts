import { combineReducers } from '@reduxjs/toolkit';
import { offersReducer } from './offers-reducer.ts';
import { sortReducer } from './sort-reducer.ts';

export const rootReducer = combineReducers({
  offers: offersReducer,
  sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
