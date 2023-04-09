import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

const galeryPicture = createPictureCardsMarkup(galleryItems);
function createPictureCardsMarkup (galleryItems) { 
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join('');
}
galleryRef.insertAdjacentHTML('beforeend', galeryPicture );



galleryRef.addEventListener('click', onGalleryRef);

function onGalleryRef(evt) {
    evt.preventDefault();
    const isPictureSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isPictureSwatchEl) {
        return;
    }
}