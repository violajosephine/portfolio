document.querySelector(".home").addEventListener("click", nav);
document.querySelector(".about").addEventListener("click", nav);
document.querySelector(".portfolio").addEventListener("click", nav);
document.querySelector(".resume").addEventListener("click", nav);

function nav() {
  document.querySelector("#navbarNavAltMarkup").classList.remove("show");
  document.querySelector("button").setAttribute("aria-expanded", "false");
  document.querySelector("nav").classList.remove("blue-shadow");
}

document.querySelector("button").addEventListener("click", shadow);

function shadow() {
  document.querySelector("nav").classList.toggle("blue-shadow");
}

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#forrest",
      // markers: true,
      start: "top 30%",
      end: "bottom 50%",
      scrub: true,
    },
  })
  .to("#quote", {
    color: "#f2ede2",
  });
