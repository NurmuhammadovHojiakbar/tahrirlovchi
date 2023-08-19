import { CopyButtonIcon } from "../../icons";

const CopyButton = (props) => {
  return (
    <button className="copy-button" {...props}>
      <CopyButtonIcon />
    </button>
  );
};

export default CopyButton;
