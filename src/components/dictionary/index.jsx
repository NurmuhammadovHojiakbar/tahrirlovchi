import DictionaryList from "./dictionary-list";
import "./dictionary.scss";

const DictionaryWrapper = () => {
  return (
    <div className="container dictionary-container">
      <DictionaryList />
    </div>
  );
};

export default DictionaryWrapper;
