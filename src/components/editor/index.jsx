import EditorContent from "./editor-content";
import "./editor.scss";

const EditorContainer = () => {
  return (
    <div className="container editor">
      <EditorContent />
      <EditorContent pos={"right"} />
    </div>
  );
};

export default EditorContainer;
