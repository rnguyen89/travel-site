console.log("hi from index");

const navMenu = document.getElementById("menu");
const navMenuLinks = document.querySelector(".navMobileLinks");

navMenu.addEventListener("click", function () {
  console.log("menu clicked");
  navMenuLinks.classList.toggle("hide");
  element.classList.toggle("mystyle");
});

let hiddenTags = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenTags.forEach((el) => observer.observe(el));
