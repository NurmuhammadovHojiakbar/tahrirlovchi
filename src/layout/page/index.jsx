import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const Page = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;
