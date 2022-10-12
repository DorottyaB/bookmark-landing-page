const nav = document.querySelector('nav');
const mobileNavIcon = document.getElementById('mobile-nav-icon');
const radio = document.querySelectorAll('.features-radio');
const accordion = document.querySelectorAll('.accordion');
const form = document.querySelector('form');
const input = document.getElementById('email');
const invalidTooltip = document.querySelector('.invalid-tooltip');

const features = [
  {
    image: './images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    image: './images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    image: './images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];

if (window.innerWidth < 769) {
  mobileNavIcon.classList.remove('hidden');
}

mobileNavIcon.addEventListener('click', () => {
  nav.classList.toggle('extended');
  nav.classList.contains('extended')
    ? (mobileNavIcon.src = './images/icon-close.svg')
    : (mobileNavIcon.src = './images/icon-hamburger.svg');
});

function updateDOM(data, i) {
  document.getElementById('features-image').src = data[i].image;
  document.getElementById('features-title').textContent = data[i].title;
  document.getElementById('features-text').textContent = data[i].text;
}

radio.forEach((input, index) => {
  input.addEventListener('click', () => {
    updateDOM(features, index);
  });
});

accordion.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.querySelector('.arrow-icon').classList.toggle('active');
    if (acc.nextElementSibling.hidden) {
      acc.nextElementSibling.hidden = false;
    } else {
      acc.nextElementSibling.hidden = true;
    }
  });
});

function showError() {
  if (input.validity.valueMissing) {
    invalidTooltip.textContent = 'You need to enter an e-mail address';
  } else if (input.validity.typeMismatch) {
    invalidTooltip.textContent = "Whoops, make sure it's an email";
  }

  invalidTooltip.classList.add('active');
  input.classList.add('error');
}

input.addEventListener('input', () => {
  if (input.validity.valid) {
    invalidTooltip.textContent = '';
    invalidTooltip.classList.remove('active');
    input.classList.remove('error');
  } else {
    showError();
  }
});

form.addEventListener('submit', e => {
  // if the email field is valid, we let the form submit
  if (!input.validity.valid) {
    showError();
    e.preventDefault();
  }
});
