let formEmail = document.querySelector(".subscription-form");
let subEmail = formEmail.querySelector("[name=e-mail]");
let subscription = document.querySelector(".subscription");
let btnSub = document.querySelector(".sub")

formEmail.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!subEmail.value){
    subscription.classList.add("modal-error");
    }else {
    subscription.classList.remove("modal-error");
  }
});

btnSub.addEventListener("mouseup", function (evt) {
  evt.preventDefault();
  subscription.classList.remove("modal-error");

});


