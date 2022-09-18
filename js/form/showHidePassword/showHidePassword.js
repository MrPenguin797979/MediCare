const showHidePassword = (
  inputSelector,
  showSelector,
  hideSelector,
  hideClass
) => {
  const input = document.querySelector(inputSelector);
  const showElement = document.querySelector(showSelector);
  const hideElement = document.querySelector(hideSelector);

  showElement?.addEventListener("click", function () {
    showElement.classList.toggle(hideClass);
    hideElement.classList.toggle(hideClass);

    const inputType = input.getAttribute("type");

    input?.setAttribute("type", inputType === "password" ? "text" : "password");
  });

  hideElement?.addEventListener("click", function () {
    showElement.classList.toggle(hideClass);
    hideElement.classList.toggle(hideClass);

    const inputType = input.getAttribute("type");

    input?.setAttribute("type", inputType === "password" ? "text" : "password");
  });
};

export default showHidePassword;
