const images = document.querySelectorAll(".slideshow img");
const nextBtn = document.getElementById("nextBtn");
let current = 0;

nextBtn.addEventListener("click", () => {
  let prev = current;
  images[prev].classList.remove("active");
  images[prev].classList.add("out");

  current = (current + 1) % images.length;
  images[current].classList.add("active");

  setTimeout(() => {
    images[prev].classList.remove("out");
  }, 800);
});
