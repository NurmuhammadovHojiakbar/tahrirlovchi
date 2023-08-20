import { combineReducers } from "@reduxjs/toolkit";
import EditorReducer from "./editor-slice";
import { translatorApi } from "../api";

const rootReducer = combineReducers({
  editorState: EditorReducer,
  [translatorApi.reducerPath]: translatorApi.reducer,
});

export default rootReducer;
