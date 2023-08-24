import { useDispatch, useSelector } from "react-redux";
import { EditorState } from "draft-js";
import {
  updateEditor,
  updateErrorWords,
} from "../../../store/reducer/editor-slice";
import { useCheckContentMutation } from "../../../store/api";
import translate from "../../../utils/Translator";
import Swal from "sweetalert2";
import { generateDecorator } from "../../../utils/helpers";

const CheckButton = () => {
  const { isLatin, content } = useSelector((store) => store.editorState);
  const dispatch = useDispatch();

  const [mutator] = useCheckContentMutation();

  const checkHandler = async (words) => {
    try {
      const res = await mutator({
        text: translate(words, true),
      });
      const data = await res.data;
      if (data?.length > 0) {
        if (isLatin) {
          dispatch(updateErrorWords(data));
          return dispatch(
            updateEditor(
              EditorState.set(content, {
                decorator: generateDecorator(data),
              })
            )
          );
        }
        const translatedErrors = data.map((el) => {
          return {
            word: translate(el.word),
            suggestions: el.suggestions.map((el) => translate(el)),
          };
        });
        dispatch(updateErrorWords(translatedErrors));
        return dispatch(
          updateEditor(
            EditorState.set(content, {
              decorator: generateDecorator(translatedErrors),
            })
          )
        );
      }
      Swal.fire({
        title: "Muvaffaqiyatli!",
        text: "Xato so‘z topilmadi! Davom ettirishni xohlaysizmi",
        icon: "success",
        confirmButtonText: "Ha",
      });
    } catch (err) {
      Swal.fire({
        title: "Xatolik!",
        text: "Davom ettirishni xohlaysizmi",
        icon: "error",
        confirmButtonText: "Ha",
      });
    }
  };
  return (
    <button
      className="button-checker"
      onClick={() =>
        checkHandler(content.getCurrentContent().getPlainText(" "))
      }
    >
      Tekshirish
    </button>
  );
};

export default CheckButton;
