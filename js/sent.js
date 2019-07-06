let formEmail = document.querySelector(".subscription-form");
let subEmail = formEmail.querySelector("[name=e-mail]");
let subscription = document.querySelector(".subscription");

formEmail.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!subEmail.value){
    subscription.classList.add("modal-error");
    }else {
    subscription.classList.remove("modal-error");
  }
});


