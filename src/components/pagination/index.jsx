import PropTypes from "prop-types";
import usePagination from "../../hooks/usePagination";
import { SliderIcon } from "../icons";
import "./pagination.scss";
import useWindowSize from "../../hooks/useWindowSize";

const Pagination = ({ itemsPerPage, totalItems, currentPage, handler }) => {
  const { width } = useWindowSize();
  const [rangeList, DOTS] = usePagination({
    currentIndex: currentPage,
    itemsPerPage,
    totalItems,
    siblingCount: width > 610 ? 2 : 1,
  });

  return (
    <ul className="pagination-list">
      <li className="pagination-item">
        <button
          onClick={() => handler(currentPage - 1)}
          className="pagination-button pagination-button__left"
          disabled={currentPage === 1}
        >
          <SliderIcon />
        </button>
      </li>
      {rangeList.map((page, ind) => (
        <li className="pagination-item" key={ind}>
          {page === DOTS ? (
            page
          ) : (
            <button
              className={`pagination-button ${
                page === currentPage ? "active" : ""
              }`}
              onClick={() => handler(page)}
            >
              {page}
            </button>
          )}
        </li>
      ))}
      <li className="pagination-item">
        <button
          onClick={() => handler(currentPage + 1)}
          className="pagination-button pagination-button__right"
          disabled={currentPage === rangeList[rangeList.length - 1]}
        >
          <SliderIcon />
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
  handler: PropTypes.func,
};

export default Pagination;
