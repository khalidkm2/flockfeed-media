// features/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export const selectDarkMode = state => state.theme.darkMode;

export const themeReducer = themeSlice.reducer;
