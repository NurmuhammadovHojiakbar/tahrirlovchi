import { EyeIcon, SearchIcon } from "../../icons";

const Controller = () => {
  return (
    <div className="site-controller">
      <div className="site-controller__search">
        <button className="site-controller__btn">
          <SearchIcon />
        </button>
      </div>
      <div className="site-controller__costumization">
        <button className="site-controller__btn">
          <EyeIcon />
        </button>
      </div>
    </div>
  );
};

export default Controller;
