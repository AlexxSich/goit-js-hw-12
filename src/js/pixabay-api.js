import axios from "axios";

export async function getImages(searchedImg, page) {    

    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '43021441-25d1e61ac4c3414aff6179b78',
        q: searchedImg,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page,

    });
    const url = `${BASE_URL}?${params}`;
 
const res = await axios.get(url, {params});
return res.data
}