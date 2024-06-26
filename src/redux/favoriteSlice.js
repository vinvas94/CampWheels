import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(el => el._id !== action.payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export const getFavorites = state => state.favorites.favorites;
export const favoritesReducer = favoriteSlice.reducer;
