import { useDispatch, useSelector } from "react-redux";
import { TranslateIcon } from "../icons";
import EditorContent from "./editor-content";
import "./editor.scss";
import { updateLang } from "../../store/reducer/editor-slice";

const EditorContainer = () => {
  const { isLatin } = useSelector((store) => store.editorState);
  const dispatch = useDispatch();

  return (
    <div className="container editor">
      <div
        className="button-container"
        onClick={() => dispatch(updateLang(!isLatin))}
      >
        <div className="editor-button">
          <TranslateIcon />
        </div>
      </div>
      <EditorContent />
      <EditorContent pos={"right"} />
    </div>
  );
};

export default EditorContainer;
