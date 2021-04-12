"use strict";

// MENU BURGER

let burgerMenu = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');

burgerMenu.onclick = function (event) {
    event.preventDefault();
    burgerMenu.classList.toggle('menu__btn--active');
    menu.classList.toggle('menu--active');
};