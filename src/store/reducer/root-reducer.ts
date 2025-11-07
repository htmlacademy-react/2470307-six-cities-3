import { combineReducers } from '@reduxjs/toolkit';
import { appProcessReducer } from './app-process-reducer.ts';
import { sortReducer } from './sort-reducer.ts';
import { dataReducer } from './data-reducer.ts';
import { nearbyReducer } from './nearby-reducer.ts';

export const rootReducer = combineReducers({
  process: appProcessReducer,
  sort: sortReducer,
  data: dataReducer,
  nearby: nearbyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
