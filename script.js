const grid = document.querySelector(".gridContainer");
let size = 16;
size = size / 2;

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);

    for (let i = 0; i < size; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
  const column = document.querySelectorAll(".column");
  column.forEach((column) => column.addEventListener("mouseover", colorChange));
}

function colorChange() {
  this.style.backgroundColor = "#000000";
}

makeGrid(size);
