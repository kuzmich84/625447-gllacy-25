let feedBack = document.querySelector(".feedback-btn");
let modal = document.querySelector(".modal-feedback");
let close = document.querySelector(".close-modal-feedback");
let yourName = modal.querySelector("[name=name]");
let form = modal.querySelector(".feedback-form");
let email = modal.querySelector("#feedbackEmail");
let text = modal.querySelector("#message");
let storageName = "";
let storageEmail = "";
let overlay = document.querySelector(".overlay");
let isStorageSupport = true;
let modalBtn = document.querySelector(".modal-feedback-btn");

try {
  storageName = localStorage.getItem("yourName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


feedBack.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-feedback-show");
  overlay.classList.add("overlay-show");

  if (storageName) {
    yourName.value = storageName;
    email.focus();
    if (storageEmail) {
      email.value = storageEmail;
      text.focus();
    }
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-feedback-show");
  overlay.classList.remove("overlay-show");
  modal.classList.remove("modal-error");


});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-feedback-show");
      overlay.classList.remove("overlay-show");
      modal.classList.remove("modal-error");

    }
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!yourName.value || !email.value || !text.value) {
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("email", email.value);
    }
    modal.classList.remove("modal-error");
  }
});

modalBtn.addEventListener("mouseup", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-error");

});
