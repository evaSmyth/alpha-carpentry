'use strict'

const hamburgerBtn  = document.querySelector('.hamburg-btn');
const navList = document.querySelector('.main-nav');
const removeNav = document.querySelector('.remove-nav');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer-container');

document.getElementById("year").innerHTML = new Date().getFullYear();

const showNav = function() {
    navList.classList.add('nav-bar-show');
    main.classList.add('blur');
    footer.classList.add('blur');
};
const hideNav = function() {
    footer.classList.remove('blur');
    main.classList.remove('blur');
    navList.classList.remove('nav-bar-show');
    
};
hamburgerBtn.addEventListener('click',showNav);
removeNav.addEventListener('click', hideNav);

document.addEventListener('DOMContentLoaded', function() {
  let elements = document.querySelectorAll('.glide-in');
  elements.forEach(function(element) {
    element.classList.add('visible')
  })
});



