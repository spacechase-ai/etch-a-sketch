const grid = document.querySelector(".gridContainer");
const column = document.querySelectorAll(".column");
const colorPicker = document.getElementById("colorPicker");
const selectAColor = document.getElementById("selectAColor");
const crazyMode = document.getElementById("crazyMode");
const clear = document.getElementById("clear");
let customColor;
const range = document.getElementById("range");
const sizeSlider = document.getElementById("sizeSlider");
sizeSlider.onchange = (e) => gridResize(e.target.value);
colorPicker.addEventListener("change", setCustomColor);
colorPicker.addEventListener("input", setCustomColor);
selectAColor.onclick = () => setColorMode("color");
crazyMode.onclick = () => setColorMode("crazy");
clear.onclick = () => clearGrid();
let size = 16;
size = size / 2;

//Basic grid functionality

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
  const column = document.querySelectorAll(".column");
  column.forEach((column) => column.addEventListener("mouseover", colorChange));

  const range = document.getElementById("range");

  size = Math.floor(size);
  range.textContent = `${size} x ${size}`;
}

//Color functions that manage button inputs
let colorMode;
let colors = [
  "aqua",
  "aquamarine",
  "green",
  "lightskyblue",
  "lime",
  "plum",
  "royalblue",
  "gold",
  "salmon",
];
function setColorMode(colorNew) {
  colorMode = colorNew;
}

function setCustomColor(event) {
  customColor = event.target.value;
}

function colorChange() {
  if (colorMode == "crazy") {
    this.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  } else if (colorMode == "color") {
    this.style.backgroundColor = customColor;
  } else {
    this.style.backgroundColor = "#000000";
  }
}

function clearGrid() {
  grid.textContent = "";
  makeGrid(size);
}

//Sizing
function gridResize(value) {
  size = value;
  size = size / 2;
  clearGrid();
}

makeGrid(size);
