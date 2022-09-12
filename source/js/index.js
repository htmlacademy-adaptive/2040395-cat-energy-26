let navMain = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-nav__toggle');
let map = document.querySelector('.contacts__map');

navMain.classList.remove('main-nav__wrapper--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');
navToggle.classList.remove('main-nav__toggle--active');
map.classList.remove('contacts__map--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav__wrapper--closed');
    navMain.classList.add('main-nav__wrapper--opened');
    navToggle.classList.add('main-nav__toggle--active');
  } else {
    navMain.classList.add('main-nav__wrapper--closed');
    navMain.classList.remove('main-nav__wrapper--opened');
    navToggle.classList.remove('main-nav__toggle--active');
  }
});
