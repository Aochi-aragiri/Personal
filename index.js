const btnElem = document.querySelector(".btn__nav-bar");
const navElem = document.querySelector(".nav__list");
const navActions = document.querySelector(".nav__actions");

btnElem.onclick = function () {
  const isOpen = navElem.classList.toggle("nav_open");

  if (isOpen) {
    navElem.appendChild(navActions);
    document.querySelector("html").style.overflow = "hidden";
  } else {
    document.querySelector(".nav").appendChild(navActions);
    document.querySelector("html").style.overflow = "auto";
  }
};
