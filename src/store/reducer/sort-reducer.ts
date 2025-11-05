import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortType } from '../../constants.ts';

type SortState = {
  currentSortType: SortType;
};

const initialState: SortState = {
  currentSortType: SortType.Popular,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.currentSortType = action.payload;
    },
  },
});

export const { changeSortType } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
