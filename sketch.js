document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container');
    createGrid(16);

    document.getElementById('reset-button').addEventListener('click', () => {
        const size = prompt("Enter new grid size (1-100):", 16);
        if (size < 1 || size > 100) {
            alert("Invalid size. Please enter a number between 1 and 100.");
            return;
        }
        createGrid(size);
    });
});

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
        container.appendChild(square);
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
