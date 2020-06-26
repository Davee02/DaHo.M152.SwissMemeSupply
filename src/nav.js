
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}