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
