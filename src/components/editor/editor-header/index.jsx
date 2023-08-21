import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  // updateErrorWords,
  updateLang,
} from "../../../store/reducer/editor-slice";
// import { useCheckContentMutation } from "../../../store/api";
// import translate from "../../../utils/Translator";
// import Swal from "sweetalert2";

const EditorHeader = ({ pos }) => {
  const [open, setOpen] = useState(false);
  const { isLatin /*content*/ } = useSelector((store) => store.editorState);
  const dispatch = useDispatch();
  // const [mutator] = useCheckContentMutation();

  // const checkHandler = async (words) => {
  //   try {
  //     const res = mutator({
  //       text: translate(words, true),
  //     });
  //     const data = await res.data;
  //     console.log(data);
  //     if (res.data?.length > 0) {
  //       if (lang === "lotin") {
  //         return dispatch(updateErrorWords(res.data));
  //       }
  //       const translatedErrors = res.data.map((el) => {
  //         return {
  //           word: translate(el.word),
  //           suggestions: el.suggestions.map((el) => translate(el)),
  //         };
  //       });
  //       return dispatch(updateErrorWords(translatedErrors));
  //     }
  //     Swal.fire({
  //       title: "Muvaffaqiyatli!",
  //       text: "Xato so‘z topilmadi! Davom ettirishni xohlaysizmi",
  //       icon: "success",
  //       confirmButtonText: "Ha",
  //     });
  //   } catch (err) {
  //     Swal.fire({
  //       title: "Xatolik!",
  //       text: "Davom ettirishni xohlaysizmi",
  //       icon: "error",
  //       confirmButtonText: "Ha",
  //     });
  //   }
  // };

  const onChangeHandler = (bool) => {
    dispatch(updateLang(bool));
    setOpen(false);
  };

  const lang = pos ? !isLatin : isLatin;

  return (
    <header className="editor-header">
      <p className="editor-header__text">Tilni tanlang</p>
      <div className="word-wrapper__lang">
        <button
          className="word-wrapper__lang-button word-wrapper__lang-current"
          onClick={() => setOpen(!open)}
        >
          {lang ? "Lotin" : "Kirill"}
        </button>
        {open && (
          <div className="word-wrapper__lang-list">
            <button
              className="word-wrapper__lang-controller left"
              onClick={() => onChangeHandler(pos ? false : true)}
            >
              Lotin
            </button>
            <button
              className="word-wrapper__lang-controller right"
              onClick={() => onChangeHandler(pos ? true : false)}
            >
              Kirill
            </button>
          </div>
        )}
      </div>
      {/* {!pos && (
        <button
          className="button-checker"
          onClick={() =>
            checkHandler(content.getCurrentContent().getPlainText(" "))
          }
        >
          Tekshirish
        </button>
      )} */}
    </header>
  );
};

EditorHeader.propTypes = {
  pos: PropTypes.string,
};

export default EditorHeader;
