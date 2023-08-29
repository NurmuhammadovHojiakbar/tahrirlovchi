import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetAllDictionaryQuery } from "../../../store/api";
import { queryMaker, queryStringify } from "../../../utils/helpers";
import Pagination from "../../pagination";
import Search from "../../search";
import DictionaryType from "../dictionary-type";

const DictionaryList = () => {
  const navigate = useNavigate();
  const { search: query } = useLocation();
  const queryObj = queryMaker(query);
  const { letter, page, type } = queryObj;
  const { data: dictList } = useGetAllDictionaryQuery({ letter, page, type });

  const letterList = useMemo(() => {
    return [
      "A",
      "B",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "X",
      "Y",
      "Z",
      "Oʻ",
      "Gʻ",
      "Sh",
      "CH",
    ];
  }, []);

  const pageChangeHandler = (page) => {
    navigate(`/lugat?${queryStringify(queryObj, { page })}`);
  };

  return (
    <div className="dictionary-wrapper">
      <header className="dictionary-wrapper__header">
        <div className="dictionary-wrapper__header-left">
          <h2 className="dictionary-wrapper__title">So‘zni yozing</h2>
          <Search />
        </div>
        <DictionaryType />
      </header>
      <div className="dictionary-wrapper__line"></div>
      <ul className="letter-list">
        {letterList.map((letter, ind) => (
          <li className="letter-item" key={ind}>
            <Link
              className={`letter-link ${
                (queryObj.letter || "a") === letter.toLowerCase()
                  ? "active"
                  : ""
              }`}
              to={`/lugat?${queryStringify(queryObj, {
                letter: letter.toLowerCase(),
                page: 1,
              })}`}
            >
              {letter}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="words-list">
        {(dictList?.results || []).map((word, ind) => (
          <li className="words-item" key={ind}>
            <Link className="words-link" to={`/lugat/${word.title}`}>
              {word.title}
            </Link>
          </li>
        ))}
      </ul>
      <footer className="dictionary-wrapper__footer">
        {dictList?.results?.length > 0 && (
          <Pagination
            itemsPerPage={100}
            totalItems={dictList?.count}
            currentPage={Number(page) || 1}
            handler={pageChangeHandler}
          />
        )}
      </footer>
    </div>
  );
};

export default DictionaryList;
