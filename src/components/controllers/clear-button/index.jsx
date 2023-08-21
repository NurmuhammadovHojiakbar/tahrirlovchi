import { ClearIcon } from "../../icons";

const ClearButton = (props) => {
  return (
    <button className="controller-button controller-button__clear" {...props}>
      <ClearIcon />
    </button>
  );
};

export default ClearButton;
