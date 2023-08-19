import { useEffect, useRef, useState } from "react";
import ServicesHeader from "../header";
import CopyButton from "../copy-button";
import { copyToClipboard } from "../../../utils/helpers";
import translate from "../../../utils/Translator";
import UploadImage from "../../../assets/images/upload-file.png";

const ImageToText = () => {
  const [isLatin, setIsLatin] = useState(true);
  const [result, setResult] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef();

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log(e.dataTransfer.files[0]);
    }
  };

  useEffect(() => {
    setResult((prev) => {
      return prev
        .split(" ")
        .map((word) => translate(word, isLatin))
        .join(" ");
    });
  }, [isLatin]);

  return (
    <div className="services-widget image-to-text">
      <ServicesHeader
        title={"Rasmdan matnni o'qib olish"}
        isLatin={isLatin}
        setIsLatin={setIsLatin}
      />
      <form
        className="upload-form"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className={`upload-form__label ${dragActive ? "active" : ""}`}>
          <input
            type="file"
            className="visually-hidden upload-form__input"
            multiple={false}
            ref={inputRef}
          />
          <div>
            <img
              className="upload-form__img"
              src={UploadImage}
              alt="Upload Image"
              width={44}
              height={44}
            />
            <p>
              <button
                className="upload-button"
                type="button"
                onClick={() => inputRef.current.click()}
              >
                Yuklab oling
              </button>{" "}
              yoki rasmni bu yerga sudrab tashlang
            </p>
          </div>
        </label>
      </form>
      <textarea
        className="services-input num-to-words__textarea"
        name="resul"
        rows="15"
        placeholder="Natija..."
        readOnly
        value={result}
      />
      <div className="num-to-words__wrapper">
        <CopyButton onClick={() => copyToClipboard(result)} />
      </div>
    </div>
  );
};

export default ImageToText;
