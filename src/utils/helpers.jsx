// import Swal from "sweetalert2";

import { CompositeDecorator } from "draft-js";

export const copyToClipboard = (text) => {
  try {
    navigator.clipboard.writeText(text);
  } catch (err) {
    console.log(err);
    // Swal.fire({
    //   customClass: "alert error-alert",
    //   position: "bottom-end",
    //   icon: "error",
    //   title: "Nusxa olishda xatolik yuzberdi!",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  }
};

export const saveAsFile = (text) => {
  const element = document.createElement("a");
  const file = new Blob([text.replace(/<(.|\n)*?>/gi, "")], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = "Tahrirlovchi.txt";
  document.body.appendChild(element);
  element.click();
};

export const shareHandler = (text) => {
  try {
    navigator.share({
      title: "Tahrirlovchi - Lotin va kirill orasidagi translit xizmati",
      text: text.replace(/<(.|\n)*?>/gi, ""),
      url: "https://tahrirlovchi.uz",
    });
  } catch (err) {
    console.log(err);
  }
};

export const queryMaker = (query) =>
  Object.fromEntries(
    (query || "")
      .replace("?", "")
      .split("&")
      .map((el) => el.split("="))
  );

export const queryStringify = (query, changings = {}) => {
  const newQuery = { ...query, ...changings };
  return Object.entries(newQuery)
    .map((el) => el[0] && `${el[0]}=${el[1]}`)
    .join("&");
};

export const findWithRegex = (regex, contentBlock, callback) => {
  const text = contentBlock.getText();
  let matchArr, start, end;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    end = start + matchArr[0].length;
    callback(start, end);
  }
};

export const generateDecorator = (highlightTermsList, component) => {
  const decList = highlightTermsList.map((item) => {
    const regex = new RegExp(item?.word, "g");
    return {
      strategy: (contentBlock, callback) => {
        if (item !== "") {
          findWithRegex(regex, contentBlock, callback);
        }
      },
      component,
    };
  });
  return new CompositeDecorator(decList);
};
