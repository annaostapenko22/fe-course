import './styles.css';
import axios from 'axios';
import imgTemplate from './templates/img.hbs';
import { setTimeout } from 'timers';

const refs = {
  imgContainer: document.querySelector('.gallery'),
  searchField: document.querySelector('.search-form'),
  // loadBtn: document.querySelector('.button--load-more'),
  upBtn: document.querySelector('.up'),
  photoCard: document.querySelector('.photo-card'),
  photoCardItem: document.querySelector('.photo-card img'),
  lightBox: document.querySelector('.lightbox'),
  lightBoxBtn: document.querySelector('.lightbox__button'),
  likes: document.querySelector('.likes'),
  comments: document.querySelector('.comments'),
  downloads: document.querySelector('.downloads'),
  shows: document.querySelector('.shows'),
  loader: document.querySelector('.loader-wrapper'),
};

const getImages = (name, page) => {
  return axios.get(
    `https://pixabay.com/api/?key=14452993-a97f0aeb82bfc4ebb60896535&q=${name}&per_page=12&page=${page}`,
  );
};
let page = 1;
let searchQuery = '';
// refs.loadBtn.classList.add('unvisible');
function searchFormHandler(evt) {
  evt.preventDefault();
  // refs.loadBtn.classList.add('unvisible');
  searchQuery = evt.currentTarget.elements.query.value;
  refs.imgContainer.innerHTML = '';
  refs.searchField.elements.query.value = '';

  page = 1;
  drawImages();
}

function drawImages() {
  getImages(searchQuery, page).then(({ data }) => {
    data.hits.forEach(elem => {
      refs.imgContainer.insertAdjacentHTML('beforeend', imgTemplate(elem));
      // refs.loadBtn.classList.remove('unvisible');
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
    refs.loader.style.display = 'flex';
    const getImg = event.target.dataset.source;
    refs.photoCardItem.setAttribute('src', getImg);
    refs.photoCard.classList.add('isBlur');
    refs.lightBox.classList.add('is-open');
    const getComments = event.target.dataset.comments;
    const getLikes = event.target.dataset.likes;
    const getViews = event.target.dataset.shows;
    const getDownloads = event.target.dataset.downloads;

    setTimeout(function() {
      refs.loader.style.display = 'none';
      refs.photoCard.classList.remove('isBlur');
    }, 1000);
    refs.likes.textContent = getLikes;
    refs.comments.textContent = getComments;
    refs.shows.textContent = getViews;
    refs.downloads.textContent = getDownloads;
  }
}

function removeShowPreview() {
  refs.lightBox.classList.remove('is-open');
}

function handleBackDropClick(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  removeShowPreview();
}

function scrollWindow() {
  console.log(document.documentElement.getBoundingClientRect().bottom);
  if (
    document.documentElement.getBoundingClientRect().bottom <
    document.documentElement.clientHeight + 100
  ) {
    drawImages();
  } else {
    return;
  }
}

// function populate() {
//   while (true) {
//     // нижняя граница документа
//     let windowRelativeBottom = document.documentElement.getBoundingClientRect()
//       .bottom;

//     // если пользователь прокрутил достаточно далеко (< 100px до конца)
//     if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
//       // добавим больше данных
//       drawImages();
//     }
//   }
// }

refs.upBtn.addEventListener('click', scroll);
refs.searchField.addEventListener('submit', searchFormHandler);
// refs.loadBtn.addEventListener('click', drawImages);
window.addEventListener('scroll', scrollWindow);
refs.imgContainer.addEventListener('click', showPreview);
refs.lightBoxBtn.addEventListener('click', removeShowPreview);
window.addEventListener('click', handleBackDropClick);
