import './styles.css';
import axios from 'axios';
import imgTemplate from './templates/img.hbs';

const imgContainer = document.querySelector('.gallery');
const searchField = document.querySelector('.search-form');
const loadBtn = document.querySelector('.button--load-more');
const upBtn = document.querySelector('.up');
const photoCard = document.querySelector('.photo-card');
const photoCardItem = document.querySelector('.photo-card img');
const lightBox = document.querySelector('.js-lightbox');
const lightBoxBtn = document.querySelector('.lightbox__button');
const likes = document.querySelector('.likes');
const comments = document.querySelector('.comments');
const downloads = document.querySelector('.downloads');
const shows = document.querySelector('.shows');

console.log(lightBox);
console.log(photoCard);

console.log(loadBtn);

const getImages = (name, page) => {
  return axios.get(
    `https://pixabay.com/api/?key=14452993-a97f0aeb82bfc4ebb60896535&q=${name}&per_page=20&page=${page}`,
  );
};
let page = 1;
let searchQuery = '';
loadBtn.classList.add('unvisible');
function searchFormHandler(evt) {
  evt.preventDefault();
  loadBtn.classList.add('unvisible');
  searchQuery = evt.currentTarget.elements.query.value;
  console.log(searchQuery);
  // let page = 1;
  imgContainer.innerHTML = '';
  searchField.elements.query.value = '';

  page = 1;
  drawImages();
}

function drawImages() {
  getImages(searchQuery, page).then(({ data }) => {
    console.log(data.hits);
    console.log(page);

    data.hits.forEach(elem => {
      console.log(elem);
      imgContainer.insertAdjacentHTML('beforeend', imgTemplate(elem));
      loadBtn.classList.remove('unvisible');
    });
    incrementPage();
  });
}

function incrementPage() {
  page += 1;
  return page;
}
function scroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
function showPreview(evt) {
  if (evt.target.nodeName === 'IMG') {
    lightBox.classList.add('is-open');
    const getImg = event.target.dataset.source;
    const getComments = event.target.dataset.comments;
    const getLikes = event.target.dataset.likes;
    const getViews = event.target.dataset.shows;
    const getDownloads = event.target.dataset.downloads;
    console.log(getLikes);
    photoCardItem.setAttribute('src', getImg);
    likes.textContent = getLikes;
    comments.textContent = getComments;
    shows.textContent = getViews;
    downloads.textContent = getDownloads;
    console.log(evt.target.nodeName);
  }
}

function removeShowPreview() {
  lightBox.classList.remove('is-open');
}

function handleBackDropClick(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  removeShowPreview();
}
console.log(lightBoxBtn);
upBtn.addEventListener('click', scroll);
searchField.addEventListener('submit', searchFormHandler);
loadBtn.addEventListener('click', drawImages);
imgContainer.addEventListener('click', showPreview);
lightBoxBtn.addEventListener('click', removeShowPreview);
window.addEventListener('click', handleBackDropClick);
