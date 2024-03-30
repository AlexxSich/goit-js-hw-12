import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api";
import { imageTemplate } from "./js/render-functions";

const userInput = document.querySelector(".search-images-form");
const myGallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-container");
const loadMoreBtn = document.querySelector(".load-more-btn")

userInput.addEventListener('submit', userInputHandler);
loadMoreBtn.addEventListener('click', onLoadMoreClick)

const lightBox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
})

let searchedImg;
let currentPage = 1;
const perPage = 15;

async function userInputHandler(event) {
    event.preventDefault();
    loader.classList.add("active");
    myGallery.innerHTML = "";
    currentPage = 1;
    searchedImg = event.target.elements.search.value.trim();
    
    if(searchedImg !== "") {     
       
            try{
                const images = await getImages(searchedImg, currentPage)
                if(images.hits.length === 0) {
                iziToast.error({
                    position: 'topRight',
                    title: 'Error',
                    message: '❌ Sorry, there are no images matching your search query. Please try again!',
                });
            return;
        };   

        myGallery.insertAdjacentHTML("beforeend", imagesArr(images));

        if(images.hits.length >= 15) {
            loadMoreBtn.classList.remove("is-hidden")
        }       

        lightBox.refresh();
        userInput.reset();                                
}
            catch(error) {
                iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: '❌ Something went wrong. Try again later.',
            });
        }
            finally{
                loader.classList.remove("active");
                };            
    } else {
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: '❌ Please input your request in the search field',
                });
        };        
    };   

    function imagesArr(obj) {     
        return obj.hits.map(imageTemplate).join("");
    };

async function onLoadMoreClick(event){
        loader.classList.add("active");
    
    if(searchedImg !== "") {
        currentPage += 1;      
            
        try{
            const images = await getImages(searchedImg, currentPage)
            const totalPages = Math.ceil(images.totalHits / perPage);
            myGallery.insertAdjacentHTML("beforeend", imagesArr(images))

            myScroll();
           
            if(currentPage === totalPages){
                loadMoreBtn.classList.add("is-hidden")
                iziToast.info({
                    position: 'topRight',
                    title: 'info',
                    color:"blue",
                    message: "We're sorry, but you've reached the end of search results.",
                });
            }
            
            lightBox.refresh();
            userInput.reset();                                
}
        catch(error) {
                iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: '❌ Something went wrong. Try again later.',
            });
        }
            finally{
                loader.classList.remove("active");
                };
    } else {
            iziToast.error({
                position: 'topRight',
                title: 'Error',
                message: '❌ Please input your request in the search field',
                });
        };        
    }

function myScroll() {
    //   ?? Підкажіть будь ласка чому catch() на 106 рядку ловить це як помилку - const height = myGallery.firstElementChild.getBpoundingClientRect().height ?

     scrollBy({
        top: 570,
        behavior: "smooth",
    });
}