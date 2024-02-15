import { createReducer } from "@reduxjs/toolkit";

export const darkModeReducer = createReducer(
  {
    isDark:window.matchMedia &&  window.matchMedia("(prefers-color-scheme:dark)").matches,
  },
  {
    darkModeSuccess: (state, action) => {
      state.isDark = action.payload;
    },
  }
);
