import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main.slice";
import { basketReducer } from "./basket.slice";
// import { usersApi } from "@/entities/users/api/users.api";

export const rootReducer = combineReducers({
  main: mainReducer,
  basket: basketReducer,
  // [usersApi.reducerPath]: usersApi.reducer,
})