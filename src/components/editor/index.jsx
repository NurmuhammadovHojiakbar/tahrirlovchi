import { useDispatch, useSelector } from "react-redux";
import { TranslateIcon } from "../icons";
import EditorContent from "./editor-content";
import "./editor.scss";
import { updateLang } from "../../store/reducer/editor-slice";
import { convertToRaw } from "draft-js";
import translate from "../../utils/Translator";
import { convertFromRaw } from "draft-js";

const EditorContainer = () => {
  const { isLatin, content: editor } = useSelector(
    (store) => store.editorState
  );
  const dispatch = useDispatch();
  const rowState = convertToRaw(editor.getCurrentContent());
  rowState.blocks = rowState.blocks.map((el) => ({
    ...el,
    text: isLatin
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
          .join(" "),
  }));
  const convertedState = convertFromRaw(rowState);

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
      <EditorContent pos={"right"} convertedState={convertedState} />
    </div>
  );
};

export default EditorContainer;
