let burger  = document.querySelector('.hamburger-menu');
let overlay = document.querySelector('.header__list');
let body = document.querySelector('body');

let links = document.querySelectorAll('.header__list-item');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('hamburger-menu--active');
  overlay.classList.toggle('header__list--active');
  body.classList.toggle('body--active');
}

burger.addEventListener('click' , toggleMenu);