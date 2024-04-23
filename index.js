// variables
const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');
const carrusel = document.querySelector('.carrusel');
const contentItems = document.querySelector('.content__items');

// llamar funcion al presionar boton right
rightButton.addEventListener('click', () => {
    showSlider('right');
});

// llamar funcion al presionar boton left
leftButton.addEventListener('click', () => {
    showSlider('left');
});

// funcion para cambiar posicion de items
function showSlider(type) {
    carrusel.classList.remove('left', 'right');
    const items = document.querySelectorAll('.carrusel .content__items .item');
    if (type === 'right') {
        contentItems.appendChild(items[0]);
        carrusel.classList.add('right');
    } else {
        let lastPosition = items.length - 1;
        contentItems.prepend(items[lastPosition]);
        carrusel.classList.add('left');
    }
}