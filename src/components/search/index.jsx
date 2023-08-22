import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetWordsOnSearchQuery } from "../../store/api";
import { BigSearchIcon } from "../icons";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data: searchList } = useGetWordsOnSearchQuery(search);
  const { pathname } = useLocation();

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  return (
    <div className="dictionary-wrapper__search">
      <label className="dictionary-wrapper__label">
        <input
          className="dictionary-wrapper__input"
          type="text"
          placeholder="So‘zni yozing"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BigSearchIcon className="dictionary-wrapper__icon" />
      </label>
      {(searchList || []).length > 0 && (
        <ul className="search-list">
          {searchList.map(({ title: word }) => (
            <li className="search-item" key={word}>
              <Link className="search-link" to={`/lugat/${word}`}>
                {word}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
