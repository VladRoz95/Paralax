const bottomContainer = document.querySelector(".bottom-container");
const bottomBlocks = document.querySelectorAll(".bottom-block");
const topContainer = document.querySelector(".top-container");
const middleContainer = document.querySelector(".middle-container");
const h1 = document.querySelector(".middle-container h1");
const main = document.querySelector(".main");
const secondarySection = document.querySelector(".secondary");
const logos = document.querySelector(".logos");
const mainTopPlaceholder = document.querySelector(".main-top-placeholder");

let revealed = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const triggerPoint = 100;

  if (scrollY > triggerPoint && !revealed) {
    bottomContainer.classList.add("visible");
    topContainer.classList.add("margin-expanded", "fixed");
    middleContainer.classList.add("margin-expanded");
    h1.classList.add("active");

    mainTopPlaceholder.classList.add("active");

    bottomBlocks.forEach((block, i) => {
      setTimeout(() => {
        block.classList.add("visible");
      }, i * 300);
    });

    revealed = true;
  }

  if (scrollY <= triggerPoint && revealed) {
    bottomContainer.classList.remove("visible");
    topContainer.classList.remove("margin-expanded", "fixed");
    middleContainer.classList.remove("margin-expanded");
    h1.classList.remove("active");

     mainTopPlaceholder.classList.remove("active");

    bottomBlocks.forEach((block) => block.classList.remove("visible"));

    revealed = false;
  }

  const secondaryTop = secondarySection.getBoundingClientRect().top;

  if (secondaryTop < window.innerHeight / 2) {
    main.style.opacity = "0";
    main.style.pointerEvents = "none";
    main.style.transition = "opacity 0.6s ease";
  } else {
    main.style.opacity = "1";
    main.style.pointerEvents = "auto";
  }

  if (secondarySection.getBoundingClientRect().top < window.innerHeight) {
    secondarySection.classList.add("show");
    logos.classList.add("show");
  } else {
    secondarySection.classList.remove("show");
    logos.classList.remove("show");
  }
});

