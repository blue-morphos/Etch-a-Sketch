const container = document.querySelector('#gridContainer');

//draw black
function colorFunction(e) {
    e.target.style.backgroundColor = "black";
}

//create grid
let j = prompt("Choose the size of the drawing area (from 2-100)");
for (i = 0; i < (j*j); i++){
let cell = document.createElement('div');
cell.classList.add('cells');
cell.addEventListener("mouseover", colorFunction)
container.appendChild(cell);
let r = document.querySelector(':root');
r.style.setProperty('--columnCount', j)
}

