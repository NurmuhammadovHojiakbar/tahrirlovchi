import { CopyIcon } from "../../icons";

const CopyButton = (props) => {
  return (
    <button className="controller-button controller-button__copy" {...props}>
      <CopyIcon />
    </button>
  );
};

export default CopyButton;
