import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/reducer.ts';
import { store } from '../index.ts';

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
