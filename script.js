let squaresPerSide = 16;
let widthContainer = 960;
let items = squaresPerSide * squaresPerSide;
let widthItem = (widthContainer / squaresPerSide) + "px";

container = document.getElementById("container");

makeGrid();

function makeGrid () {
  container.setAttribute("style","width:" + widthContainer + "px");
  container.style.display = "grid";
  widthItem = (widthContainer / squaresPerSide) + "px";
  items = squaresPerSide * squaresPerSide;
  container.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", " + widthItem + ")";
  container.style.gridTemplateRows = "repeat(" + squaresPerSide + ", " + widthItem + ")";

  for (i = 0; i < items; i++) {
    let item = document.createElement("div");
    item.classList.add('item');
    item.textContent = "";
    item.style.opacity = 0.1;
    item.style.background = "black";
    item.style.width = widthItem + 'px';
    item.style.height = widthItem + 'px';
    container.appendChild(item);
  }
}

let allDivsInGrid = document.querySelectorAll("div.item");

    //The timer doesn't work yet, that is why I use mouseover instead of mousemove for now.
for (let i = 0; i < items; i++) {
  allDivsInGrid[i].addEventListener("mouseover", function(e) {
    this.style.opacity = parseFloat(this.style.opacity) + 0.02;
  })
}

btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", setSquaresPerSide);

function setSquaresPerSide () {
  let squaresSideString = prompt("How many squares would you like per side?", 16);
  squaresPerSide = Number(squaresSideString);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeGrid();
// To make sure the opacity still changes with mouseover.
  allDivsInGrid = document.querySelectorAll("div.item");
  for (let i = 0; i < items; i++) {
    allDivsInGrid[i].addEventListener("mouseover", function(e) {
      this.style.opacity = parseFloat(this.style.opacity) + 0.02;
    }
    )
  }
}