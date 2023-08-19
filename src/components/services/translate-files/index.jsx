import { useState } from "react";
import ServicesHeader from "../header";
import { ExcelIcon, FileIcon, WordIcon } from "../../icons";

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
