let loaderParent = document.querySelector(".loader-parent");
let nav__items = document.querySelector(".nav__items");
let nav_burger = document.querySelector(".nav_burger");
let category__btns = document.getElementsByClassName("category__items_btn");
let category__cards = document.getElementsByClassName("category__cards");
document.addEventListener("DOMContentLoaded", function () {});
setTimeout(function () {
  document.body.style.overflow = "visible";
  loaderParent.style.display = "none";
}, 500);

nav_burger.addEventListener("click", function () {
  nav__items.classList.toggle("show");
});
for (let btn of category__btns) {
  btn.addEventListener("click", function () {
    for (let delBtn of category__btns) {
      delBtn.classList.remove("active__btn");
    }
    btn.classList.add("active__btn");
    for (let card of category__cards) {
      if (card.id == btn.id) {
        card.classList.add("active__card");
      } else {
        card.classList.remove("active__card");
      }
    }
  });
}
