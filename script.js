const grid = document.querySelector('.grid');
const gridElements = document.querySelectorAll('.grid-element');
const sizeSlider = document.getElementById('size-slider');
const sizeLabel = document.getElementById('size-label');
const clearButton = document.getElementById('clear-button');
const colourModeButton = document.getElementById('colour-mode');
const eraserModeButton = document.getElementById('eraser-mode');
const rainbowModeButton = document.getElementById('rainbow-mode');
const selectColour = document.getElementById('colour-select');
const coordinates = document.querySelector('.coordinates');

let gridSize = grid.offsetWidth;
let size = 16;
let squareWidth = gridSize / size;
let currentMode = 'colour';
let currentColour = '#1e81c4';

sizeSlider.addEventListener('change', changeGridSize);
sizeSlider.addEventListener('mousemove', changeGridSize);
clearButton.addEventListener('click', clearGrid);
colourModeButton.addEventListener('click', updateMode);
rainbowModeButton.addEventListener('click', updateMode);
eraserModeButton.addEventListener('click', updateMode);
selectColour.addEventListener('change', updateColour);
selectColour.addEventListener('change', updateMode);
selectColour.addEventListener('mouseover', hoverColour);
colourModeButton.addEventListener('mouseover', hoverColour);

function hoverColour() {
    selectColour.addEventListener('mouseout', removeColour);
    colourModeButton.addEventListener('mouseout', removeColour);
    selectColour.classList.add('colour-hover');
    colourModeButton.classList.add('colour-hover');
    function removeColour() {
        selectColour.classList.remove('colour-hover');
        colourModeButton.classList.remove('colour-hover');
    }
}

function updateColour(e) {
    currentColour = e.target.value;
}

function updateMode(e) {
    currentMode = e.target.value;
    if (e.target.value.startsWith('#')) {
        currentMode = 'colour';
        colourModeButton.classList.add('active');
        eraserModeButton.classList.remove('active');
        rainbowModeButton.classList.remove('active');
        selectColour.classList.add('active');
    } else {
        colourModeButton.classList.remove('active');
        eraserModeButton.classList.remove('active');
        rainbowModeButton.classList.remove('active');
        selectColour.classList.remove('active');
        e.target.classList.add('active');
    }
    if (currentMode === 'colour') {
        selectColour.classList.add('active');
    }
}

function changeGridSize() {
    size = sizeSlider.value;
    squareWidth = gridSize / size;
    sizeLabel.textContent = `${size} x ${size}`;
    resetGrid();
    buildGrid(size);
}

function buildGrid(size) {
    const totalSquares = size * size;
    for (let i = 1; i <= totalSquares; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.style.width = `${squareWidth}px`;
        gridElement.addEventListener('mouseover', changeColour);
        // gridElement.addEventListener('mouseover', setCoordinates);
        gridElement.addEventListener('touchstart', setCoordinates);
        gridElement.addEventListener('touchmove', setCoordinates);
        grid.appendChild(gridElement);
    }
}

function setCoordinates(e) {
    const newCoord = document.createElement('li');
    newCoord.textContent = e.touches[0].clientX + ' ' + e.touches[0].clientY;
    // newCoord.textContent = 'hello';
    coordinates.appendChild(newCoord);
}

function changeColour(e) {
    if (currentMode === 'colour') {
        e.target.style.backgroundColor = currentColour;
    } else if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB}, 0.8)`
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#ffffff';
    }
}

function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function clearGrid() {
    resetGrid();
    buildGrid(size);
}

document.addEventListener('DOMContentLoaded', function () {
    buildGrid(size);
});

// How to get it working on mobile, which event to fire?
// change settings flex settings to display horizontally on mobile
// grid loses square aspect when screen size changes
