import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";
import "./suggestion.scss";
import {
  replaceErrorWord,
  skipErrorWord,
} from "../../store/reducer/editor-slice";
import { useState } from "react";

const SuggestionModal = () => {
  const [custom, setCustom] = useState("");
  const {
    mousePosition: { x, y },
    suggestions,
  } = useSelector((store) => store.editorState);
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();

  return (
    <div
      className="suggestions"
      style={{
        top: y + 180 >= height ? y - 100 : y + 15,
        left: x + 180 >= width ? x - 120 : x + 15,
      }}
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
        onClick={() => dispatch(skipErrorWord(suggestions.word))}
      >
        E&apos;tiborsiz qoldirish
      </button>
    </div>
  );
};

export default SuggestionModal;
