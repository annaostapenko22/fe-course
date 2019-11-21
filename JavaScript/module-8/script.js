import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  imageContainer: document.querySelector(".js-lightbox"),
  image: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector("[data-action=close-lightbox]")
};

images.forEach(elem => {
  const imageItem = `<li class="gallery__item">
  <a class="gallery__link">
      <img class="gallery__image" src="${elem.preview}"
          data-source="${elem.original}" alt="${elem.description}" />

      <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
      </span>
  </a>
</li>`;

  refs.gallery.insertAdjacentHTML("beforeend", imageItem);
});

const showPreview = event => {
  if (event.target.nodeName === "IMG") {
    const originalImagePath = event.target.dataset.source;
    refs.imageContainer.classList.add("is-open");
    refs.image.setAttribute("src", originalImagePath);
  }
};

function changeImg(key) {
  const currentImgPath = refs.image.getAttribute("src");
  let index = images.findIndex(elem => {
    return currentImgPath === elem.original;
  });
  if (key === "ArrowRight") {
    index += 1;
    if (index === images.length) {
      index = 0;
    }
  }
  if (key === "ArrowLeft") {
    index -= 1;
    if (index === -1) {
      index = images.length - 1;
    }
  }
  refs.image.setAttribute("src", images[index].original);
}

function handleKeyPress(event) {
  if (event.key === "Escape") {
    hidePreview();
  }
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    changeImg(event.key);
  }
}

const hidePreview = event => {
  refs.imageContainer.classList.remove("is-open");
};

function handleBackdropClick(event) {
  if (event.target.nodeName === "IMG") {
    return;
  }
  hidePreview();
}

refs.gallery.addEventListener("click", showPreview);
refs.closeBtn.addEventListener("click", hidePreview);
window.addEventListener("click", handleBackdropClick);
document.addEventListener("keydown", handleKeyPress);
