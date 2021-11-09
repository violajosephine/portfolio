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

//I wanna
let i = 0;

const randomizeText = () => {
  const phrase = document.querySelector(".random-word");
  const compStyles = window.getComputedStyle(phrase);
  const animation = compStyles.getPropertyValue("animation");
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;

  const phrases = [
    "Graphic design",
    "Wordpress",
    "Motion graphics",
    "Video editing",
    "Design theory",
    "Photography",
    "GIF's",
    "Photo editing",
    "Premiere pro",
    "Ideation and concept development",
    "Group work",
    "Media and society",
  ];

  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];

  setTimeout(() => {
    phrase.textContent = newPhrase;
  }, 400); // time to allow opacity to hit 0 before changing word
};

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);

  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
};

const getAnimationTime = () => {
  const phrase = document.querySelector(".random-word");
  const compStyles = window.getComputedStyle(phrase);
  let animation = compStyles.getPropertyValue("animation");

  // firefox support for non-shorthand property
  animation != ""
    ? animation
    : (animation = compStyles.getPropertyValue("-moz-animation-duration"));

  // webkit support for non-shorthand property
  animation != ""
    ? animation
    : (animation = compStyles.getPropertyValue("-webkit-animation-duration"));

  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
};

randomizeText();
setInterval(randomizeText, getAnimationTime());
