import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from "./gallery-items.js";

// const galleryMarkup = createGalleryCardMarkup(galleryItems);

function createGalleryCardMarkup(galleryItem) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

  console.log(instance);

  instance.show();

  if (instance.show()) {
    window.addEventListener("keydown", onKeyDown);

    function onKeyDown(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }
  }
}