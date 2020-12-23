// Variables
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Event Listener: Open Navigation
open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

// Event Listener: Close Navigation
close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});
