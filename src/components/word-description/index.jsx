import { useParams } from "react-router-dom";
import { useGetWordQuery } from "../../store/api";
import "./word.scss";

const WordDescription = () => {
  const { word: wordParam } = useParams();
  const { data: word, isError } = useGetWordQuery(wordParam);
  console.log(word, isError);

  return <div className="container word-container"></div>;
};

export default WordDescription;
