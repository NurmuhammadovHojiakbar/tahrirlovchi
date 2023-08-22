import { useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetWordQuery } from "../../store/api";
import { CopyButton, SaveButton, ShareButton } from "../controllers";
import translate from "../../utils/Translator";
import { copyToClipboard, saveAsFile, shareHandler } from "../../utils/helpers";
import "./word.scss";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Search from "../search";

const WordDescription = () => {
  const [isLatin, setIsLatin] = useState(true);
  const [open, setOpen] = useState(false);
  const langRef = useRef();
  useOnClickOutside(langRef, () => setOpen(false));
  const { word: wordParam } = useParams();
  const { data } = useGetWordQuery(wordParam);

  const word = (data || [])[0];
  const latinDesc = word?.description || "";
  const cyrillicDesc = useMemo(() => {
    return (
      word?.description
        .split(" ")
        .map((el) => translate(el, false))
        .join(" ") || ""
    );
  }, [word]);

  const onChangeHandler = (bool) => {
    setIsLatin(bool);
    setOpen(false);
  };

  return (
    <div className="container word-container">
      <div className="dictionary-wrapper word-wrapper">
        <header className="word-wrapper__header">
          <div className="word-wrapper__word">
            {isLatin ? word?.title : translate(word?.title || "")}
          </div>
          <div className="word-wrapper__lang" ref={langRef}>
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
          <Search />
        </header>
        <div className="word-wrapper__context">
          <div
            className="word-wrapper__description"
            dangerouslySetInnerHTML={{
              __html: isLatin ? latinDesc : cyrillicDesc,
            }}
          ></div>
        </div>
        <footer className="word-wrapper__footer">
          <CopyButton
            onClick={() => copyToClipboard(isLatin ? latinDesc : cyrillicDesc)}
          />
          <ShareButton
            onClick={() => shareHandler(isLatin ? latinDesc : cyrillicDesc)}
          />
          <SaveButton
            onClick={() => saveAsFile(isLatin ? latinDesc : cyrillicDesc)}
          />
        </footer>
      </div>
    </div>
  );
};

export default WordDescription;
