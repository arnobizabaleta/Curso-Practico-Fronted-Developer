const menuEmail = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggledesktopMenu);

function toggledesktopMenu () {
  desktop_menu.classList.toggle("inactive");
}