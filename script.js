//Card Slider
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((card) => card.classList.remove("active"));
    card.classList.add("active");
  });
});
//Change Background Color
const changeBackground = document.querySelector("#change-background");
const icon = document.querySelector("#icon-background");

changeBackground.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  if (document.documentElement.classList.contains("dark-mode")) {
    icon.classList.toggle("fa-moon");
    icon.classList.remove("fa-sun");
  } else {
    icon.classList.toggle("fa-sun");
    icon.classList.remove("fa-moon");
  }
});
