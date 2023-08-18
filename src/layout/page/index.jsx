import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

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

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
