import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetWordTypesQuery } from "../../../store/api";
import { queryMaker, queryStringify } from "../../../utils/helpers";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const DictionaryType = () => {
  const [open, setOpen] = useState(false);
  const typeRef = useRef();
  const navigate = useNavigate();

  const { search } = useParams();
  const queryObj = queryMaker(search);
  const { type } = queryObj;

  const { data: types, isLoading } = useGetWordTypesQuery();
  useOnClickOutside(typeRef, () => setOpen(false));

  const curType = (types || []).find((el) => el.id === (type || 1));

  const pageChangeHandler = (type) => {
    navigate(`/lugat?${queryStringify(queryObj, { type })}`);
    setOpen(false);
  };

  if (isLoading) {
    return <div className="skeleton"></div>;
  }

  return (
    <div className="dictionary-type">
      <button
        className="dictionary-type__button"
        onClick={() => setOpen(!open)}
      >
        {curType?.title}
      </button>
      {open && (
        <ul className="dictionary-type__list" ref={typeRef}>
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
