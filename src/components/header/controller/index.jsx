import PropTypes from "prop-types";
import { EyeIcon, SearchIcon } from "../../icons";

const Controller = ({ search, setSearch }) => {
  return (
    <div className="site-controller">
      <div className="site-controller__search">
        <button
          className={`site-controller__btn ${search ? "active" : ""}`}
          onClick={() => setSearch(!search)}
        >
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

Controller.propTypes = {
  search: PropTypes.bool,
  setSearch: PropTypes.func,
};

export default Controller;
