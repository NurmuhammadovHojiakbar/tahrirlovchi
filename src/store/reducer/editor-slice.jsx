import { createSlice } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";

const initialState = {
  content: EditorState.createEmpty(),
  isLatin: true,
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
  },
});

export const { updateLang, updateEditor } = editorSlice.actions;
export default editorSlice.reducer;
