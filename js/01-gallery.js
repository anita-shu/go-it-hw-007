import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
const gallery = (galleryItems) => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source=${original}
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
};
const markup = gallery(galleryItems);
container.insertAdjacentHTML("beforeend", markup);

container.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.closest(".gallery__item")) {
    return;
  }
  

  const dataPreview = evt.target.dataset.source;
  const dataDescription = evt.target.alt;

  const instance = basicLightbox.create(`
    <div class="modal">
    <img
    class="gallery__image"
    src="${dataPreview}"
    alt="${dataDescription}"
    </div>
`);

  instance.show();
}

