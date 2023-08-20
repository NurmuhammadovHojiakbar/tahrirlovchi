import { SaveIcon } from "../../icons";

const SaveButton = (props) => {
  return (
    <button className="controller-button controller-button__save" {...props}>
      <SaveIcon />
    </button>
  );
};

export default SaveButton;
