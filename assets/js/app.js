// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Light-dark theme
var icon = document.getElementById("light-dark");
var theme = document.getElementById("theme");
var doc = document.getElementById("doc");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Toggle light to dark mode theme
icon.onclick = function() {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    doc.src = "assets/images/profile/icons8-pdf-100 light.png";
    theme.name = "moon-outline";
  } else {
    doc.src = "assets/images/profile/icons8-pdf-100 dark.png";
    theme.name= "sunny-outline";
  }
}

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});