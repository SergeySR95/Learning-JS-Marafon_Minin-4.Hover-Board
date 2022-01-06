const board = document.querySelector("#board");
// const colors = ["red", "blue", "green", "yellow", "purple"];
const colors = [
  "#f80c0c",
  "#ff8008",
  "#cefa0a",
  "#33ff00",
  "#04dffc",
  "#1504fd",
  "#fd07c8",
  "#a36464",
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseover", setColor); //Можно сократить запись выше, но необходимо внести изменения в функцию setColor()

  // square.addEventListener("mouseleave", () => removeColor(square));
  square.addEventListener("mouseleave", removeColor); //Можно сократить запись выше, но необходимо внести изменения в функцию removeColor()

  board.append(square);
}

// function setColor(element) {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// function removeColor(element) {
//   element.style.backgroundColor = "#1d1d1d";
//   element.style.boxShadow = `0 0 2px #000`;
// }

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  // const index = Math.floor(Math.random() * colors.length);
  // return colors[index];
  return colors[Math.floor(Math.random() * colors.length)]; //Тоже самое что и две строки выше, но проще и без создания доп. переменных
}
