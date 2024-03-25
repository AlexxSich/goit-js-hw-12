
export function imageTemplate(image) {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" width="360" height="200"/>
        </a>
        <ul class="gallery-data">
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Likes</span>
                <span class="gallery-item-data-value">${image.likes}</span>
            </li>
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Views</span>
                <span class="gallery-item-data-value">${image.views}</span>
            </li>
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Comments</span>
                <span class="gallery-item-data-value">${image.comments}</span>
            </li>
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Downloads</span>
                <span class="gallery-item-data-value">${image.downloads}</span>
            </li>
        </ul>
    </li>`
}


