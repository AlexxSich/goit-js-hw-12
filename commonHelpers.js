import"./assets/styles-74ba716c.js";import{S as u,i as t}from"./assets/vendor-2cfd16ce.js";import{g as c}from"./assets/pixabay-api-ac892f83.js";import{i as d}from"./assets/render-functions-5dd04fe4.js";const n=document.querySelector(".search-images-form"),a=document.querySelector(".gallery"),s=document.querySelector(".loader-container"),l=document.querySelector(".load-more-btn");n.addEventListener("submit",y);l.addEventListener("click",f);const m=new u(".gallery-link",{captionsData:"alt",captionDelay:250});let o,i=1;const p=15;async function y(r){if(r.preventDefault(),s.classList.add("active"),a.innerHTML="",i=1,o=r.target.elements.search.value.trim(),o!=="")try{const e=await c(o,i);if(e.hits.length===0){t.error({position:"topRight",title:"Error",message:"❌ Sorry, there are no images matching your search query. Please try again!"});return}a.insertAdjacentHTML("beforeend",g(e)),e.hits.length>=15&&l.classList.remove("is-hidden"),m.refresh(),n.reset()}catch{t.error({position:"topRight",title:"Error",message:"❌ Something went wrong. Try again later."})}finally{s.classList.remove("active")}else t.error({position:"topRight",title:"Error",message:"❌ Please input your request in the search field"})}function g(r){return r.hits.map(d).join("")}async function f(r){if(s.classList.add("active"),o!==""){i+=1;try{const e=await c(o,i),h=Math.ceil(e.totalHits/p);a.insertAdjacentHTML("beforeend",g(e)),v(),i===h&&(l.classList.add("is-hidden"),t.info({position:"topRight",title:"info",color:"blue",message:"We're sorry, but you've reached the end of search results."})),m.refresh(),n.reset()}catch{t.error({position:"topRight",title:"Error",message:"❌ Something went wrong. Try again later."})}finally{s.classList.remove("active")}}else t.error({position:"topRight",title:"Error",message:"❌ Please input your request in the search field"})}function v(){scrollBy({top:570,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
