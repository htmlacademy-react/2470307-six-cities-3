import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer/root-reducer.ts';

export const store = configureStore({ reducer: rootReducer });
