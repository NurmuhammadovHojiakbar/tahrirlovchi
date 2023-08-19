import { useLocation } from "react-router-dom";
import { useGetAllDictionaryQuery } from "../../../store/api";
import { queryMaker } from "../../../utils/helpers";
import { BigSearchIcon } from "../../icons";

const DictionaryList = () => {
  const { query } = useLocation();
  const { data: dictList } = useGetAllDictionaryQuery(queryMaker(query));
  console.log(dictList);
  return (
    <div className="dictionary-wrapper">
      <header className="dictionary-wrapper__header">
        <h2 className="dictionary-wrapper__title">So’zni yozing</h2>
        <label className="dictionary-wrapper__label">
          <input
            className="dictionary-wrapper__input"
            type="text"
            placeholder="So’zni yozing"
          />
          <BigSearchIcon className="dictionary-wrapper__icon" />
        </label>
      </header>
      <div className="dictionary-wrapper__line"></div>
    </div>
  );
};

export default DictionaryList;
