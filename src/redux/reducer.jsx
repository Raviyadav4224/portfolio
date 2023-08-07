import { createReducer } from "@reduxjs/toolkit";

export const darkModeReducer = createReducer(
  {
    isDark: JSON.stringify(localStorage.getItem("theme")) === "dark" ? true : false,
  },
  {
    // darkModeRequest:(state,action)=>{
    //     state.loading=true
    // },
    darkModeSuccess: (state, action) => {
      state.isDark = action.payload;
    },
    // darkModeFail:(state,action)=>{
    //     state.loading=false
    //     state.error=action.payload
    // }
  }
);
