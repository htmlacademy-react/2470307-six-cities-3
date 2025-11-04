import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer/reducer.ts';

export const store = configureStore({ reducer });
