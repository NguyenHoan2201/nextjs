import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./userSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  [usersSlice.name]: usersSlice.reducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export const store =  configureStore({
    reducer,
    devTools: true,
  });
const makeStore = () => store;

export const state = store.getState();
  

export const wrapper = createWrapper(makeStore);