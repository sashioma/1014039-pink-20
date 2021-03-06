var form = document.querySelector("form");
var competitionbtn = document.querySelector(".competition__btn");

var request = document.querySelector(".popup__request");
var error = document.querySelector(".popup__error");

var close = document.querySelectorAll(".popup__close-btn");
var errorclose = document.getElementById("close-error");
var requestclose = document.getElementById("close-request");

function validate () {
  var fields = form.querySelectorAll(".competition__input-field--required"); // Находим все элементы обязательные к заполнению

  for (var i = 0; i < fields.length; i++) { // Обходим все полученные элементы
    if (fields[i].value == "") {
      fields[i].style.borderColor = "red";
      error.classList.add("popup__show");
    } else {
      request.classList.add("popup__show"); // Если все обязательные поля заполнены показать модальное окно с успешной отправкой формы
      return true; // Возвращаем true
    }
  }
}

competitionbtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  validate();
});

requestclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  request.classList.remove("popup__show");
});

errorclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  error.classList.remove("popup__show");
});
