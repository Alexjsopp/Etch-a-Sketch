const grid = document.querySelector('#grid');
let gridNumber = "16";
let passCount = 0;
const chooseBtn = document.querySelector('#choose');
const square = document.querySelector('.square');

function createGrid (gridNumber) {
  // gridNumber = parseInt(gridNumber);
  grid.style.display = "grid";
  grid.style.grid = `repeat(${gridNumber}, 1fr)/repeat(${gridNumber}, 1fr)`;

  for (let i = 0; i < gridNumber * gridNumber; i++){
    const cell = document.createElement('div');
    cell.setAttribute("style", `border:1px solid black`);
    cell.classList.add('square');
    grid.appendChild(cell);
    cell.addEventListener("mouseenter", changeColor);
  }
}

createGrid(gridNumber);



function changeColor(e) {
  const cell = e.target;
  var r = Math.floor(Math.random()*256);          // Random between 0-255
  var g = Math.floor(Math.random()*256);          // Random between 0-255
  var b = Math.floor(Math.random()*256);          // Random between 0-255
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

  cell.style.backgroundColor = rgb;
}


chooseBtn.addEventListener('click', () => {
  let newNumber = prompt('How many cells?');
  // Add line here to check if number entered.
  let numberOfCells = grid.childElementCount;
  if (numberOfCells > -1){
    for (i = 0; i < numberOfCells; i++){
      grid.lastElementChild.remove();
    }
  }
  createGrid(newNumber);  
});