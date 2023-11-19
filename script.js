//pemberitahuan
alert("nyamnyam.sushi");

// sidebar
const menu = document.querySelector(".navbar #menu");
const nav = document.querySelector(".navbar .navbar-nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
