
export function getImages(searchedImg) {    

    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '43021441-25d1e61ac4c3414aff6179b78',
        q: searchedImg,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;
 
return fetch(url).then(res => res.json());
// тут треба прописати  код для помилки 404 бо fetch не вважає це помилкою
}