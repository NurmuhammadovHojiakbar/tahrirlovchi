import { combineReducers } from "@reduxjs/toolkit";
import { translatorApi } from "../api";

const rootReducer = combineReducers({
  [translatorApi.reducerPath]: translatorApi.reducer,
});

export default rootReducer;
