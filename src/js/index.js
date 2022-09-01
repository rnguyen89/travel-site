console.log("hi from index");

const navMenu = document.getElementById("menu");
const navMenuLinks = document.querySelector(".navMobileLinks");

navMenu.addEventListener("click", function () {
  console.log("menu clicked");
  navMenuLinks.classList.toggle("hide");
  element.classList.toggle("mystyle");
});
