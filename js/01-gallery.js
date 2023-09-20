import { galleryItems } from './gallery-items.js';

// Change code below this line

const createItem = (item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
};

const itemsContainer = document.querySelector('.gallery');
for (const item of galleryItems) {
    const newItem = createItem(item);
    itemsContainer.innerHTML += newItem;
}

itemsContainer.addEventListener("click", imageClick);

function imageClick(e) {

    blockStandartAction(e);

        if (e.target.nodeName !== "IMG") {
            return;
        }
        
        const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width = "800" height="600">
        `);
    instance.show();
    
    itemsContainer.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    });

    function blockStandartAction(e) {
        e.preventDefault();
    }
}
    
