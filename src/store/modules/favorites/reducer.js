import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';

/* eslint-disable no-param-reassign */
const favoritesSlice = createSlice({
  name: moduleName,
  initialState: {
    favorites: [],
  },
  reducers: {
    getFavorites(state) {
      state.favorites = JSON.parse(localStorage.getItem('favorites'));
    },
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, quiz) {
      const index = state.favorites.indexOf(quiz);
      state.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;
export const {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} = favoritesSlice.actions;
