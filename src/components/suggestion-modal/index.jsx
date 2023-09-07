import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";
import "./suggestion.scss";
import {
  replaceErrorWord,
  skipErrorWord,
  updateIsSuggested,
} from "../../store/reducer/editor-slice";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useAddWordMutation } from "../../store/api";

const SuggestionModal = () => {
  const [custom, setCustom] = useState("");
  const ref = useRef(null);
  const [addWord] = useAddWordMutation();

  const {
    mousePosition: { x, y },
    suggestions,
  } = useSelector((store) => store.editorState);
  const dispatch = useDispatch();

  const { width } = useWindowSize();
  useOnClickOutside(ref, () => dispatch(updateIsSuggested(false)));

  return (
    <div
      className="suggestions"
      style={{
        top: y,
        left: x + 180 >= width ? x - 120 : x + 15,
      }}
      ref={ref}
    >
      <ul className="suggestions-list">
        {suggestions?.suggestions?.map((el, inx) => (
          <li
            className="suggestions-item"
            key={inx}
            onClick={() =>
              dispatch(
                replaceErrorWord({ word: suggestions.word, replace: el })
              )
            }
          >
            {el}
          </li>
        ))}
      </ul>
      <label className="suggestions-label">
        <input
          type="text"
          className="suggestions-input"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
        <button
          className="suggestions-button suggestions-button__add"
          onClick={() =>
            dispatch(
              replaceErrorWord({ word: suggestions.word, replace: custom })
            )
          }
        >
          +
        </button>
      </label>
      <button
        className="suggestions-button suggestions-button__skip"
        onClick={() => {
          dispatch(skipErrorWord(suggestions.word));
          addWord(suggestions.word);
        }}
      >
        E&apos;tiborsiz qoldirish
      </button>
    </div>
  );
};

export default SuggestionModal;
