var feedBack = document.querySelector(".feedback-btn");
var modal = document.querySelector(".modal-feedback");
var close = document.querySelector(".close-modal-feedback");
var yourName = modal.querySelector("[name=name]");
var form = modal.querySelector(".feedback-form");
var email = modal.querySelector("#feedbackEmail");
var text = modal.querySelector("#message");
var storageName = "";
var storageEmail = "";
var overlay = document.querySelector(".overlay")

var isStorageSupport = true;
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

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-feedback-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-feedback-show");
     overlay.classList.remove("overlay-show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!yourName.value || !email.value || !text.value) {
    console.log('need fill');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("yourName", yourName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

