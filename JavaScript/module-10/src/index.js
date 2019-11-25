import './styles.css';
import menu from './menu.json';
import template from './templates/menu.hbs';

const menuList = document.querySelector('.menu');
menuList.innerHTML = template(menu);
const changeBtn = document.querySelector('.change-theme');

start();

function start() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'night') {
    document.body.classList.toggle('dark-theme');
  }
}
function changedTheme() {
  const isNightTheme = document.body.classList.toggle('dark-theme');
  if (isNightTheme) {
    localStorage.setItem('theme', 'night');
  } else {
    localStorage.setItem('theme', 'day');
  }
}
changeBtn.addEventListener('click', changedTheme);
