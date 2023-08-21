import { createSlice } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";

const initialState = {
  content: EditorState.createEmpty(),
  isLatin: true,
  errorWords: [],
  mousePosition: {
    x: 0,
    y: 0,
  },
  isSuggestions: false,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateEditor: (state, action) => {
      state.content = action.payload;
    },
    updateLang: (state, action) => {
      state.isLatin = action.payload;
    },
    updateErrorWords: (state, action) => {
      state.errorWords = action.payload;
    },
  },
});

export const { updateLang, updateEditor, updateErrorWords } =
  editorSlice.actions;
export default editorSlice.reducer;
