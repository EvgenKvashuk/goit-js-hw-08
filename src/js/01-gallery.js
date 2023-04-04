// Описаний в документації
import SimpleLightbox from "simplelightbox";

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line


import { galleryItems } from './gallery-items';
// Change code below this line

// пошук елемента
const galleryRef = document.querySelector('.gallery');


// створення карток
const pictureCardsMarkup = createPictureCardsMarkup(galleryItems);

function createPictureCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>
        </div>`
    }).join('');
}


galleryRef.insertAdjacentHTML('beforeend', pictureCardsMarkup);