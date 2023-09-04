import { useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { convertFromHTML, convertToHTML } from "draft-convert";
import { useGetWordQuery } from "../../store/api";
import { CopyButton, SaveButton, ShareButton } from "../controllers";
import translate from "../../utils/Translator";
import { copyToClipboard, saveAsFile, shareHandler } from "../../utils/helpers";
import "./word.scss";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Search from "../search";
import { convertFromRaw, convertToRaw } from "draft-js";
import DOMPurify from "dompurify";

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
    if (!word) {
      return <p></p>;
    }
    const blocksFromHTML = convertFromHTML(word?.description);

    const rowState = convertToRaw(blocksFromHTML);
    rowState.blocks = rowState?.blocks?.map((el) => ({
      ...el,
      text: el.text.startsWith("ing. - ")
        ? el.text
        : el.text
            .split(" ")
            .map((word) => translate(word, false))
            .join(" "),
    }));
    return convertToHTML(convertFromRaw(rowState));
  }, [word]);

  const onChangeHandler = (bool) => {
    setIsLatin(bool);
    setOpen(false);
  };

  return (
    <div className="container word-container">
      <div className="dictionary-wrapper word-wrapper">
        <header className="word-wrapper__header">
          <div
            className={`word-wrapper__word ${
              word?.dictionary_type === 7 ? "upper" : ""
            }`}
          >
            {isLatin
              ? word?.title.replace(/--/g, "//")
              : translate(word?.title.replace(/--/g, "//") || "")}
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
              __html: DOMPurify.sanitize(isLatin ? latinDesc : cyrillicDesc),
            }}
          ></div>
        </div>
        <footer className="word-wrapper__footer">
          <CopyButton
            onClick={() =>
              copyToClipboard(
                isLatin
                  ? `${word?.title || ""} - ${latinDesc}`
                  : `${translate(word?.title || "")} - ${cyrillicDesc}`
              )
            }
          />
          <ShareButton
            onClick={() =>
              shareHandler(
                isLatin
                  ? `${word?.title || ""} - ${latinDesc}`
                  : `${translate(word?.title || "")} - ${cyrillicDesc}`
              )
            }
          />
          <SaveButton
            onClick={() =>
              saveAsFile(
                isLatin
                  ? `${word?.title || ""} - ${latinDesc}`
                  : `${translate(word?.title || "")} - ${cyrillicDesc}`
              )
            }
          />
        </footer>
      </div>
    </div>
  );
};

export default WordDescription;
