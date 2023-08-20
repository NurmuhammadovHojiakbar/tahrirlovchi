import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor, convertToRaw } from "draft-js";
import PropTypes from "prop-types";
import EditorHeader from "../editor-header";
import { CopyButton, SaveButton, ShareButton } from "../../controllers";
import { updateEditor } from "../../../store/reducer/editor-slice";
import translate from "../../../utils/Translator";

const EditorContent = ({ pos }) => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const { content: editor, isLatin } = useSelector((state) => {
    return state.editorState;
  });

  const handleEditorChange = (newEditorState) => {
    dispatch(updateEditor(newEditorState));
  };

  const translated = convertToRaw(editor.getCurrentContent()).blocks.map((el) =>
    isLatin
      ? el.text
          .split(" ")
          .map((word) => translate(word, false))
          .join(" ")
      : el.text
          .replace(
            /\d+(\s+)((январ)|(феврал)|(март)|(апрел)|(май)|(июн)|(июл)|(август)|(сентябр)|(октябр)|(сентабр)|(октабр)|(ноябр)|(декабр)|(йил))/gi,
            (matched) => {
              const list = matched.split(" ").filter((w) => w !== "");
              return `${list[0]}-${list[1]}`;
            }
          )
          .split(" ")
          .map((word) => translate(word, true))
          .join(" ")
  );

  return (
    <div className="editor-content">
      <EditorHeader pos={pos} />
      <div className="editor-line"></div>
      <div className="editor-content__wrapper">
        {pos ? (
          <div className="editable-content__result">
            {translated?.map((el, indx) =>
              el === "" ? <br key={indx} /> : <p key={indx}>{el}</p>
            )}
          </div>
        ) : (
          <div
            className="editable-content__context"
            onClick={() => editorRef.current.focus()}
          >
            <Editor
              editorState={editor}
              onChange={handleEditorChange}
              ref={editorRef}
            />
          </div>
        )}
      </div>
      <footer className={`editor-footer ${pos ? "right" : ""}`}>
        <CopyButton />
        <SaveButton />
        <ShareButton />
      </footer>
    </div>
  );
};

EditorContent.propTypes = {
  pos: PropTypes.string,
};

export default EditorContent;
