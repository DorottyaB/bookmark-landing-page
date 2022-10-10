const nav = document.querySelector('nav');
const mobileNavIcon = document.getElementById('mobile-nav-icon');
const radio = document.querySelectorAll('input[type="radio"]');

mobileNavIcon.addEventListener('click', () => {
  nav.classList.toggle('extended');
  nav.classList.contains('extended')
    ? (mobileNavIcon.src = './images/icon-close.svg')
    : (mobileNavIcon.src = './images/icon-hamburger.svg');
});
