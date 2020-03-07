const grid = document.querySelector('#grid');
let gridNumber = "16";
const chooseBtn = document.querySelector('#choose');
const square = document.querySelector('.square');

function createGrid (gridNumber) {
  gridNumber = parseInt(gridNumber);
  grid.style.display = "grid";
  grid.style.grid = `repeat(${gridNumber}, 1fr)/repeat(${gridNumber}, 1fr)`;
  document.getElementById('cell-count').innerText = 'Grid size = ' + gridNumber;

  for (let i = 0; i < gridNumber * gridNumber; i++){
    const cell = document.createElement('div');
    cell.setAttribute("style", `border:none`);
    cell.setAttribute("pass-count", 0);
    cell.classList.add('square');
    grid.appendChild(cell);
    cell.addEventListener("mouseenter", changeColor);
  }
}

createGrid(gridNumber);



function changeColor(e) {
  const cell = e.target;
  if (cell.getAttribute('pass-count') == 0){
    let passCount = parseInt(cell.getAttribute('pass-count'));
    passCount += 1;
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    cell.style.backgroundColor = rgb;
    cell.setAttribute('pass-count', passCount);
  } else if (cell.getAttribute('pass-count') > 0 && cell.getAttribute('pass-count') < 11) {
    let passCount = parseInt(cell.getAttribute('pass-count'));
    let tint = passCount / 10;
    let r = (Math.floor(Math.random()*256)) * (1 - tint);
    let g = (Math.floor(Math.random()*256)) * (1 - tint);
    let b = (Math.floor(Math.random()*256)) * (1 - tint);
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    cell.style.backgroundColor = rgb;    
    passCount += 1;
    cell.setAttribute('pass-count', passCount);
  }
}


chooseBtn.addEventListener('click', () => {
  gridNumber = prompt('Size of new container?');
  if(isNaN(gridNumber) || gridNumber < 1 || gridNumber > 100){
    gridNumber = prompt('Number must be between 1 and 100');
    let numberOfCells = grid.childElementCount;
    if (numberOfCells > -1){
      for (i = 0; i < numberOfCells; i++){
        grid.lastElementChild.remove();
      }
    }
    createGrid(gridNumber);  
  } else {
    let numberOfCells = grid.childElementCount;
    if (numberOfCells > -1){
      for (i = 0; i < numberOfCells; i++){
        grid.lastElementChild.remove();
      }
    }
    createGrid(gridNumber);  
  }
});