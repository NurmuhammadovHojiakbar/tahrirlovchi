import PropTypes from "prop-types";
import "./container.scss";

const Container = ({ children, ...props }) => {
  return (
    <div className="wrapper" {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
