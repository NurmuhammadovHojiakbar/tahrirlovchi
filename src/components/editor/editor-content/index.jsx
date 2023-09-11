import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor, EditorState } from "draft-js";
import PropTypes from "prop-types";
import EditorHeader from "../editor-header";
import {
  ClearButton,
  CopyButton,
  SaveButton,
  ShareButton,
} from "../../controllers";
import { updateEditor } from "../../../store/reducer/editor-slice";
import {
  copyToClipboard,
  saveAsFile,
  shareHandler,
} from "../../../utils/helpers";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";

const EditorContent = ({ pos, convertedState }) => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const { content: editor } = useSelector((state) => {
    return state.editorState;
  });

  const handleEditorChange = (newEditorState) => {
    const count = newEditorState.getCurrentContent().getPlainText().length;
    if (count < 5000) {
      dispatch(updateEditor(newEditorState));
      return;
    }
  };

  const length = editor.getCurrentContent().getPlainText().length;

  return (
    <div className="editor-content">
      <EditorHeader pos={pos} />
      <div className="editor-line"></div>
      <div className="editor-content__wrapper">
        {pos ? (
          <div
            className="editor-content__result"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(convertToHTML(convertedState)),
            }}
          ></div>
        ) : (
          <div
            className="editor-content__context"
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
        <CopyButton
          onClick={() =>
            copyToClipboard(
              pos
                ? convertedState.getPlainText()
                : editor.getCurrentContent().getPlainText()
            )
          }
        />
        <SaveButton
          onClick={() =>
            saveAsFile(
              pos
                ? convertedState.getPlainText()
                : editor.getCurrentContent().getPlainText()
            )
          }
        />
        <ShareButton
          onClick={() =>
            shareHandler(
              pos
                ? convertedState.getPlainText()
                : editor.getCurrentContent().getPlainText()
            )
          }
        />
        <ClearButton
          onClick={() => handleEditorChange(EditorState.createEmpty())}
        />
        {!pos && (
          <div className={`character-length ${length > 4950 ? "red" : ""}`}>
            {length} / 5000
          </div>
        )}
      </footer>
    </div>
  );
};

EditorContent.propTypes = {
  pos: PropTypes.string,
  convertedState: PropTypes.object,
};

export default EditorContent;
