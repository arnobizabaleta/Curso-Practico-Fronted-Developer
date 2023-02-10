const menuEmail = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopping_car = document.querySelector(".navbar-shopping-cart");
const details = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggledesktopMenu);
burgerMenu.addEventListener("click", toggleburgerMenu);
shopping_car.addEventListener("click", toggleshoppingcar);


function toggledesktopMenu () {
  desktop_menu.classList.toggle("inactive");
}

function toggleburgerMenu () {
  mobileMenu.classList.toggle("inactive");
}

function toggleshoppingcar () {
  details.classList.toggle("inactive")
}