let popup = document.querySelector(".user-link");
let login = document.querySelector("[name=email]");
let password = document.querySelector("[name=password]");
let formLogin = document.querySelector(".login-form");
let modalLogin = document.querySelector(".modal-login");
let storageLogin = "";
let storagePassword = "";
let btnLogin = document.querySelector(".login-btn");

let isStorageLogin = true;
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
  } else {
    login.focus();
  }
});

popup.addEventListener("mouseout", function (evt) {
  evt.preventDefault();

});


btnLogin.addEventListener("mouseup", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-error");
})

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
