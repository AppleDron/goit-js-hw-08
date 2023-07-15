import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const addMarkup = arr => {
  const markup = arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
            </a>
        </li>`
    )
    .join('');

  galleryListEl.insertAdjacentHTML('beforeend', markup);
};

addMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
