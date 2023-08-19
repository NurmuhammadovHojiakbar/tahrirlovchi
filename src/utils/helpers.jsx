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
