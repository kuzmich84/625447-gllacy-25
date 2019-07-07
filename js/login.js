var popup = document.querySelector(".user-link");
var login = document.querySelector("[name=email]");
var password = document.querySelector("[name=password]");
var formLogin = document.querySelector(".login-form");
var modalLogin = document.querySelector(".modal-login")
var storageLogin = "";
var storagePassword = "";

var isStorageLogin= true;
try {
  storageLogin = localStorage.getItem("login");

} catch (err) {
  isStorageLogin = false;
}

popup.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-error");
  if (storageLogin) {
    login.value = storageLogin;
    password.focus();
    if (storagePassword) {
      password.value = storagePassword;
      login.focus();
      }
  } else{
    login.focus();
  }
});

popup.addEventListener("mouseout", function (evt) {
  evt.preventDefault();

});

formLogin.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!login.value || !password.value) {
    modalLogin.classList.add("modal-error");
    } else {
    if (isStorageLogin) {
      localStorage.setItem("login", login.value);
      }
  }
});
