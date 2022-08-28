import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./userSlice";
import { createWrapper } from "next-redux-wrapper";

export const store =  configureStore({
    reducer: {
      [usersSlice.name]: usersSlice.reducer
    },
    devTools: true,
  });
const makeStore = () => store;

export const state = store.getState();
  

export const wrapper = createWrapper(makeStore);