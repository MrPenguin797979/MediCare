import closeForm from "./form/close/closeForm.js";
import showHidePassword from "./form/showHidePassword/showHidePassword.js";

document.addEventListener("DOMContentLoaded", function () {
  closeForm(".popup", ".closeButton");
  showHidePassword("#password", ".eye.eyeOpen", ".eye.eyeClose", "hidden");
});
