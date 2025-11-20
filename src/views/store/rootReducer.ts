import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main.slice";
import { basketReducer } from "./basket.slice";
import { productReducer } from "./product.slice";
// import { usersApi } from "@/entities/users/api/users.api";

export const rootReducer = combineReducers({
  main: mainReducer,
  basket: basketReducer,
  product: productReducer,
  // [usersApi.reducerPath]: usersApi.reducer,
})