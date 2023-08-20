// import Swal from "sweetalert2";

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
