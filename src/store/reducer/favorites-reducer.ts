import { createSlice } from '@reduxjs/toolkit';
import { TypeOffer } from '../../types/offer.ts';
import { changeFavoriteStatusAction, fetchFavoritesAction, logoutAction } from '../action/api-actions.ts';

type FavoritesState = {
  favorites: TypeOffer[];
  isFavoritesLoading: boolean;
};

const initialState: FavoritesState = {
  favorites: [],
  isFavoritesLoading: true,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        if (updatedOffer.isFavorite) {
          state.favorites.push(updatedOffer);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== updatedOffer.id);
        }
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
