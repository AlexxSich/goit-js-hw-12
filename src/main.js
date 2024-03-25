import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api";
import { imageTemplate } from "./js/render-functions";

const userInput = document.querySelector(".search-images-form");
const myGallery = document.querySelector(".gallery")
const loader = document.querySelector(".loader-container")

userInput.addEventListener('submit', userInputHandler);

const lightBox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
}) 

function userInputHandler(event) {
    event.preventDefault();
    loader.classList.add("active");
    myGallery.innerHTML = "";
    const searchedImg = event.target.elements.search.value.trim();
    
    if(searchedImg !== "") {
       getImages(searchedImg).then(images => {
        if(images.hits.length === 0) {
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: '❌ Sorry, there are no images matching your search query. Please try again!',
              });
              return;
        }
            const markup = imagesArr(images);
            myGallery.innerHTML = markup;  
            lightBox.refresh();
            userInput.reset();

// event.currentTarget.reset();
// ??? не зрозумів чому .catch() ловить event.currentTarget.reset() як помилку
                        
        }).catch(error => {
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: '❌ Something went wrong. Try again later.',
          });
        }).finally(() => {
            loader.classList.remove("active");
        });
    } else {
        iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: '❌ Please input your request in the search field',
          });
    };  
    };   

    function imagesArr(arr) {
        return arr.hits.map(imageTemplate).join("");
    };
