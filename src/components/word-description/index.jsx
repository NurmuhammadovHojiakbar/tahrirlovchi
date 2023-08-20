import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetWordQuery } from "../../store/api";
import "./word.scss";
import translate from "../../utils/Translator";
import { CopyButton, SaveButton, ShareButton } from "../controllers";

const WordDescription = () => {
  const [isLatin, setIsLatin] = useState(true);
  const [open, setOpen] = useState(false);
  const { word: wordParam } = useParams();
  const { data } = useGetWordQuery(wordParam);

  const word = (data || [])[0];

  const onChangeHandler = (bool) => {
    setIsLatin(bool);
    setOpen(false);
  };

  return (
    <div className="container word-container">
      <div className="dictionary-wrapper word-wrapper">
        <header className="word-wrapper__header">
          <div className="word-wrapper__word">{word?.title}</div>
          <div className="word-wrapper__lang">
            <button
              className="word-wrapper__lang-button word-wrapper__lang-current"
              onClick={() => setOpen(!open)}
            >
              {isLatin ? "Lotin" : "Kirill"}
            </button>
            {open && (
              <div className="word-wrapper__lang-list">
                <button
                  className="word-wrapper__lang-controller left"
                  onClick={() => onChangeHandler(true)}
                >
                  Lotin
                </button>
                <button
                  className="word-wrapper__lang-controller right"
                  onClick={() => onChangeHandler(false)}
                >
                  Kirill
                </button>
              </div>
            )}
          </div>
        </header>
        <div className="word-wrapper__context">
          <div
            className="word-wrapper__description"
            dangerouslySetInnerHTML={{
              __html: isLatin
                ? word?.description
                : word?.description
                    .split(" ")
                    .map((el) => translate(el, isLatin))
                    .join(" "),
            }}
          ></div>
        </div>
        <footer className="word-wrapper__footer">
          <CopyButton />
          <ShareButton />
          <SaveButton />
        </footer>
      </div>
    </div>
  );
};

export default WordDescription;
