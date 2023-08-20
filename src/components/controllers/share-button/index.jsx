import { ShareIcon } from "../../icons";

const ShareButton = (props) => {
  return (
    <button className="controller-button controller-button__share" {...props}>
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
