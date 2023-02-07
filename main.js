const menuEmail = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggledesktopMenu);

function toggledesktopMenu () {
  desktop_menu.classList.toggle("inactive");
}

burgerMenu.addEventListener("click", toggleburgerMenu);

function toggleburgerMenu () {
  mobileMenu.classList.toggle("inactive");
}