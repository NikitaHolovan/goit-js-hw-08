

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector(".gallery");
const galleryItemMarkup = galleryItems.map((galItem) => 
    `<li><a class="gallery__item" href="${galItem.original}">
  <img class="gallery__image" src="${galItem.preview}" alt="${galItem.description}" />
</a></li>`).join("");

galleryUl.insertAdjacentHTML("beforeend", galleryItemMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});

console.log(galleryItems);