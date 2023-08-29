import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetWordTypesQuery } from "../../../store/api";
import { queryMaker } from "../../../utils/helpers";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const DictionaryType = () => {
  const [open, setOpen] = useState(false);
  const typeRef = useRef();
  const navigate = useNavigate();

  const { search } = useLocation();
  const queryObj = queryMaker(search);
  const { type } = queryObj;

  const { data: types, isLoading } = useGetWordTypesQuery();
  useOnClickOutside(typeRef, () => setOpen(false));

  const curType = (types || []).find((el) => el.id === (Number(type) || 1));

  const pageChangeHandler = (type) => {
    navigate(`/lugat?type=${type}`);
    setOpen(false);
  };

  if (isLoading) {
    return <div className="dictionary-type__skeleton"></div>;
  }

  return (
    <div className="dictionary-type" ref={typeRef}>
      <button
        className="dictionary-type__button"
        onClick={() => setOpen(!open)}
      >
        {curType?.title}
      </button>
      {open && (
        <ul className="dictionary-type__list">
          {types?.map((type) => (
            <li className="dictionary-type__item" key={type.id}>
              <button
                className="dictionary-type__button"
                onClick={() => pageChangeHandler(type.id)}
              >
                {type.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DictionaryType;
