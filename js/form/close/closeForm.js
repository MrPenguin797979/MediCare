const closeForm = (formSelector, closeButtonSelector) => {
  const form = document.querySelector(formSelector);
  const closeButton = form?.querySelector(closeButtonSelector);

  closeButton?.addEventListener("click", () => form.classList.add("clicked"));
};

export default closeForm;
