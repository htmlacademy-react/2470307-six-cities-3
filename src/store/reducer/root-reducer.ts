import { combineReducers } from '@reduxjs/toolkit';
import { appProcessReducer } from './app-process-reducer.ts';
import { sortReducer } from './sort-reducer.ts';
import { offersReducer } from './offers-reducer.ts';
import { nearbyReducer } from './nearby-reducer.ts';
import { userProcessReducer } from './user-process-reducer.ts';

export const rootReducer = combineReducers({
  process: appProcessReducer,
  sort: sortReducer,
  data: offersReducer,
  nearby: nearbyReducer,
  user: userProcessReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
