import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { updateLang } from "../../../store/reducer/editor-slice";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import CheckButton from "../check-button";

const EditorHeader = ({ pos }) => {
  const [open, setOpen] = useState(false);
  const langRef = useRef(null);
  const { isLatin } = useSelector((store) => store.editorState);
  const dispatch = useDispatch();
  useOnClickOutside(langRef, () => setOpen(false));

  const onChangeHandler = (bool) => {
    dispatch(updateLang(bool));
    setOpen(false);
  };

  const lang = pos ? !isLatin : isLatin;

  return (
    <header className="editor-header">
      <p className="editor-header__text">Tilni tanlang</p>
      <div className="word-wrapper__lang" ref={langRef}>
        <button
          className="word-wrapper__lang-button word-wrapper__lang-current"
          onClick={() => setOpen(!open)}
        >
          {lang ? "Lotin" : "Kirill"}
        </button>
        {open && (
          <div className="word-wrapper__lang-list">
            <button
              className="word-wrapper__lang-controller left"
              onClick={() => onChangeHandler(pos ? false : true)}
            >
              Lotin
            </button>
            <button
              className="word-wrapper__lang-controller right"
              onClick={() => onChangeHandler(pos ? true : false)}
            >
              Kirill
            </button>
          </div>
        )}
      </div>
      {!pos && <CheckButton />}
    </header>
  );
};

EditorHeader.propTypes = {
  pos: PropTypes.string,
};

export default EditorHeader;
