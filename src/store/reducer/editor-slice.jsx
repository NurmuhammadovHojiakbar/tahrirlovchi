import { createSlice } from "@reduxjs/toolkit";
import { EditorState, Modifier, SelectionState } from "draft-js";
import { findWithRegex, generateDecorator } from "../../utils/helpers";

const initialState = {
  content: EditorState.createEmpty(),
  isLatin: true,
  errorWords: [],
  mousePosition: {
    x: 0,
    y: 0,
  },
  isSuggested: false,
  suggestions: null,
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
    updateIsSuggested: (state, action) => {
      state.isSuggested = action.payload;
    },
    updateSugestions: (state, action) => {
      const { position, text } = action.payload;
      return {
        ...state,
        mousePosition: {
          x: position.x,
          y: position.y,
        },
        isSuggested: true,
        suggestions: state.errorWords.find((el) => el.word === text),
      };
    },
    skipErrorWord: (state, action) => {
      const filtered = state.errorWords.filter(
        (el) => el.word !== action.payload
      );
      return {
        ...state,
        content: EditorState.set(state.content, {
          decorator: generateDecorator(filtered),
        }),
        errorWords: filtered,
        isSuggested: false,
      };
    },
    replaceErrorWord: (state, action) => {
      const { word, replace } = action.payload;
      const regex = new RegExp(word, "g");
      const selectionsToReplace = [];
      let contentState = state.content.getCurrentContent();
      const blockMap = contentState.getBlockMap();

      blockMap.forEach((contentBlock) =>
        findWithRegex(regex, contentBlock, (start, end) => {
          const blockKey = contentBlock.getKey();
          const blockSelection = SelectionState.createEmpty(blockKey).merge({
            anchorOffset: start,
            focusOffset: end,
          });

          selectionsToReplace.push(blockSelection);
        })
      );

      selectionsToReplace.forEach((selectionState) => {
        contentState = Modifier.replaceText(
          contentState,
          selectionState,
          replace
        );
      });

      return {
        ...state,
        content: EditorState.push(state.content, contentState),
        errorWords: state.errorWords.filter((el) => el.word !== word),
        isSuggested: false,
      };
    },
  },
});

export const {
  updateLang,
  updateEditor,
  updateErrorWords,
  updateSugestions,
  skipErrorWord,
  replaceErrorWord,
  updateIsSuggested,
} = editorSlice.actions;
export default editorSlice.reducer;
