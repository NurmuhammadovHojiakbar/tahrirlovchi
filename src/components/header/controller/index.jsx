import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { EyeIcon, SearchIcon } from "../../icons";
import SpecialView from "./special-view";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Controller = ({ search, setSearch }) => {
  const [open, setOpen] = useState(false);
  const specialRef = useRef(null);

  useOnClickOutside(specialRef, () => setOpen(false));

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
      <div className="site-controller__costumization" ref={specialRef}>
        <button className="site-controller__btn" onClick={() => setOpen(!open)}>
          <EyeIcon />
        </button>
        {open && <SpecialView setOpen={setOpen} />}
      </div>
    </div>
  );
};

Controller.propTypes = {
  search: PropTypes.bool,
  setSearch: PropTypes.func,
};

export default Controller;
