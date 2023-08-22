import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateSugestions } from "../../store/reducer/editor-slice";
import "./highlight.scss";

const SearchHighlight = ({ children }) => {
  const dispatch = useDispatch();

  const updateHandler = (e) => {
    dispatch(
      updateSugestions({
        position: {
          x: e.nativeEvent.clientX,
          y: e.nativeEvent.clientY,
        },
        text: children[0].props.text,
      })
    );
  };
  return (
    <span className="highlight" onClick={updateHandler}>
      {children}
    </span>
  );
};

SearchHighlight.propTypes = {
  children: PropTypes.node,
};

export default SearchHighlight;
