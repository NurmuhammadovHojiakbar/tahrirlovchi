import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import logger from "redux-logger";
import rootReducer from "./reducer";
import { translatorApi } from "./api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (gm) =>
    gm({ serializableCheck: false }).concat(logger, translatorApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export default store;
