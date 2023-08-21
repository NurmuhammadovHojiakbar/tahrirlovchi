import { useState } from "react";
import ServicesHeader from "../header";
import { ExcelIcon, FileIcon, WordIcon } from "../../icons";
import { usePostFileMutation } from "../../../store/api";
import Swal from "sweetalert2";

const TranslateFiles = () => {
  const [isLatin, setIsLatin] = useState(true);
  const filesList = [
    {
      id: 1,
      type: "Fayl",
      icon: <FileIcon />,
      accept: ".xlsx,.docx,.txt",
      class: "file",
    },
    {
      id: 2,
      type: "Word",
      icon: <WordIcon />,
      accept: ".docx",
      class: "word",
    },
    {
      id: 3,
      type: "Excel",
      icon: <ExcelIcon />,
      accept: ".xlsx",
      class: "excel",
    },
  ];
  const [mutator] = usePostFileMutation();

  const uploadHandler = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("latincyril", isLatin ? "latin" : "cyril");
    try {
      const res = await mutator(formData);
      const data = await res.data;

      const element = document.createElement("a");
      element.href = URL.createObjectURL(data);
      element.download = file.name;
      document.body.appendChild(element);
      element.click();
    } catch (err) {
      Swal.fire({
        title: "Kutilmagan xatolik!",
        text: "Davom ettirishni xohlaysizmi",
        icon: "error",
        confirmButtonText: "Ha",
      });
    }
  };

  const fileUploadHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      uploadHandler(file);
      e.target.value = null;
    }
  };

  return (
    <div className="services-widget translate-files">
      <ServicesHeader
        title={"Fayllarni translatsiya qilish"}
        isLatin={isLatin}
        setIsLatin={setIsLatin}
      />
      <div className="translate-files__list">
        {filesList.map((file) => (
          <label
            className={`files-label files-label__${file.class}`}
            key={file.id}
          >
            <input
              type="file"
              className="visually-hidden"
              accept={file.accept}
              onChange={fileUploadHandler}
            />
            <span className="files-icon">{file.icon}</span>
            <span className="files-text">{file.type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TranslateFiles;
