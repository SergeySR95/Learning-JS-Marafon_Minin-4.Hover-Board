const board = document.querySelector("#board");
// const colors = ["red", "blue", "green", "yellow", "purple"];
const colors = [
  "#d26c3c",
  "#8a62ad",
  "#34abd3",
  "e67cf8",
  "2e2a6c",
  "#684bad",
  "#cd456f",
  "#2d6a5f",
];
const SQUARES_NUMBER = 800;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
