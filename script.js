const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('header nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
