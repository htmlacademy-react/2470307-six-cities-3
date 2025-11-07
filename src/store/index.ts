import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer/root-reducer.ts';
import { createAPI } from '../api/api.ts';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
