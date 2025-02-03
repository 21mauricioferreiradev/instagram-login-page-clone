const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropdown-button");

button.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

// Fecha o dropdown ao clicar fora
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});