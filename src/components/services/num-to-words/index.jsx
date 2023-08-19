import { useEffect, useState } from "react";
import ServicesHeader from "../header";
import CopyButton from "../copy-button";
import toWords from "../../../utils/num-to-words";
import translate from "../../../utils/Translator";
import { copyToClipboard } from "../../../utils/helpers";

const NumToWords = () => {
  const [isLatin, setIsLatin] = useState(true);
  const [context, setContext] = useState({
    number: "",
    result: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setContext((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (context.number.length === 0) {
      setContext((prev) => ({
        ...prev,
        result: "",
      }));
      return;
    }

    setContext((prev) => ({
      ...prev,
      result: toWords(prev.number)
        .split(" ")
        .map((word) => translate(word, isLatin))
        .join(" "),
    }));
  }, [context.number, isLatin]);

  return (
    <div className="services-widget num-to-words">
      <ServicesHeader
        title={"Raqamni matnga o'girish"}
        isLatin={isLatin}
        setIsLatin={setIsLatin}
      />

      <label className="num-to-words__label">
        <input
          className="services-input num-to-words__input"
          type="number"
          min="0"
          inputMode="numeric"
          pattern="\d*"
          placeholder="Raqamni kiriting..."
          name="number"
          value={context.numer}
          onChange={changeHandler}
        />
        <CopyButton onClick={() => copyToClipboard(context.number)} />
      </label>

      <textarea
        className="services-input num-to-words__textarea"
        name="resul"
        rows="10"
        placeholder="Natija..."
        readOnly
        value={context.result}
      />
      <div className="num-to-words__wrapper">
        <CopyButton onClick={() => copyToClipboard(context.result)} />
      </div>
    </div>
  );
};

export default NumToWords;
