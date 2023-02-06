const menuEmail = document.getElementsByClassName("navbar-email");
const desktop_menu = document.getElementsByClassName("desktop-menu");

menuEmail.addEventListener("click", toggledesktopMenu);

function toggledesktopMenu () {
  desktop_menu.classList.toggle("inactive");
}