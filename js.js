document.querySelector(".home").addEventListener("click", nav);
document.querySelector(".about").addEventListener("click", nav);
document.querySelector(".portfolio").addEventListener("click", nav);
document.querySelector(".resume").addEventListener("click", nav);

function nav() {
  document.querySelector("#navbarNavAltMarkup").classList.remove("show");
}

document.querySelector("button").addEventListener("click", shadow);

function shadow() {
  document.querySelector("nav").classList.toggle("blue-shadow");
}
