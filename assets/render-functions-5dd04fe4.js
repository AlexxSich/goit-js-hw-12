function l(a){return`<li class="gallery-item">
        <a class="gallery-link" href="${a.largeImageURL}">
            <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" width="360" height="200"/>
        </a>
        <ul class="gallery-data">
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Likes</span>
                <span class="gallery-item-data-value">${a.likes}</span>
            </li>
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Views</span>
                <span class="gallery-item-data-value">${a.views}</span>
            </li>
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Comments</span>
                <span class="gallery-item-data-value">${a.comments}</span>
            </li>
            <li class="gallery-item-data">
                <span class="gallery-item-data-title">Downloads</span>
                <span class="gallery-item-data-value">${a.downloads}</span>
            </li>
        </ul>
    </li>`}export{l as i};
//# sourceMappingURL=render-functions-5dd04fe4.js.map
