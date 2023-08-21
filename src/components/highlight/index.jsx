import PropTypes from "prop-types";
import "./highlight.scss";

const SearchHighlight = ({ children }) => {
  return <span className="highlight">{children}</span>;
};

SearchHighlight.propTypes = {
  children: PropTypes.node,
};

export default SearchHighlight;
