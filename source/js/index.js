let mainNav = document.querySelector('.main-nav__wrapper');
let dropdownButton = document.querySelector('.main-nav__toggle');

dropdownButton.onclick = function() {function1();function2();};

function1 = function() {
  mainNav.classList.toggle('main-nav__wrapper--open');
};

function2 = function() {
  dropdownButton.classList.toggle('main-nav__toggle--active');
};
