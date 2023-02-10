// Реализация открытия и закрытия подменю
// Элемент подменю
const select = document.querySelector(".select-open--1");
const select2 = document.querySelector(".select-open--2");
const select3 = document.querySelector(".select-open--3");
const select4 = document.querySelector(".select-open--4");
const select5 = document.querySelector(".select-open--5");

// Элемент списка подменю
const submenu = document.querySelector(".submenu__drop");
const submenu2 = document.querySelector(".submenu__drop-2");
const submenu3 = document.querySelector(".submenu__drop-3");
const submenu4 = document.querySelector(".submenu__drop-4");
const submenu5 = document.querySelector(".submenu__drop-5");

// Элемент ссылок
const menuLinks = document.querySelectorAll(".select-dropdown__link");

select.addEventListener("click", function () {
  submenu.classList.toggle("submenu__drop--active");
});
select2.addEventListener("click", function () {
  submenu2.classList.toggle("submenu__drop-2--active");
});
select3.addEventListener("click", function () {
  submenu3.classList.toggle("submenu__drop-3--active");
});
select4.addEventListener("click", function () {
  submenu4.classList.toggle("submenu__drop-4--active");
});
select5.addEventListener("click", function () {
  submenu5.classList.toggle("submenu__drop-5--active");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    submenu.classList.remove("submenu__drop--active");
  });
  el.addEventListener("click", function () {
    submenu2.classList.remove("submenu__drop-2--active");
  });
  el.addEventListener("click", function () {
    submenu3.classList.remove("submenu__drop-3--active");
  });
  el.addEventListener("click", function () {
    submenu4.classList.remove("submenu__drop-4--active");
  });
  el.addEventListener("click", function () {
    submenu5.classList.remove("submenu__drop-5--active");
  });
});

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
});
