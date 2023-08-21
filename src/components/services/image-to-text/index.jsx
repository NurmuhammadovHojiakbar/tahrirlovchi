import { useEffect, useRef, useState } from "react";
import ServicesHeader from "../header";
import CopyButton from "../copy-button";
import { copyToClipboard } from "../../../utils/helpers";
import translate from "../../../utils/Translator";
import UploadImage from "../../../assets/images/upload-file.png";
import { usePostImageMutation } from "../../../store/api";
import Swal from "sweetalert2";

const ImageToText = () => {
  const [isLatin, setIsLatin] = useState(true);
  const [dragActive, setDragActive] = useState(false);
  const [result, setResult] = useState("");
  const inputRef = useRef();
  const [mutator] = usePostImageMutation();

  const uploadHandler = async (formData, e) => {
    try {
      const res = await mutator(formData);
      setResult(
        res.data.text
          .split(" ")
          .map((word) => translate(word, isLatin))
          .join(" ")
      );
    } catch (err) {
      if (err.response.data.detail) {
        Swal.fire({
          title: "Kutilmagan xatolik!",
          text: "Bunday kengaytmalik fayl qo‘llab quvvatlanmaydi. Davom ettirishni xohlaysizmi",
          icon: "error",
          confirmButtonText: "Ha",
        });
        return;
      }
      Swal.fire({
        title: "Kutilmagan xatolik!",
        text: "Davom ettirishni xohlaysizmi",
        icon: "error",
        confirmButtonText: "Ha",
      });
    } finally {
      e.target.value = null;
    }
  };

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      uploadHandler(formData, e);
    }
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const formData = new FormData();
      formData.append("image", file);
      uploadHandler(formData, e);
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
        title={"Rasmdan matnni o‘qib olish"}
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
            onChange={uploadImage}
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
