const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");

let hamburgerClosed = true;

hamburgerBtn.addEventListener("click", () => {
  if (hamburgerClosed) {
    hamburgerBtn.setAttribute("src", "images/icon-close.svg");
    hamburgerBtn.style.position = "fixed";
    mobileMenu.style.transform = "translateX(0)";
    hamburgerClosed = false;
  } else {
    hamburgerBtn.setAttribute("src", "images/icon-hamburger.svg");
    hamburgerBtn.style.position = "static";
    mobileMenu.style.transform = "translateX(150%)";
    hamburgerClosed = true;
  }
});
