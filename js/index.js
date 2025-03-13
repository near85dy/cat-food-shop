fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("catFacts").innerHTML = data.fact;
  });

const carouselInner = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});
