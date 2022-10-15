// script for toggle
const toggleBars = document.querySelector('.toggle-bars');

toggleBars.addEventListener('click', () => {
    document.querySelector(".main-menu").classList.toggle("open");
})