function r(a){const t="https://pixabay.com/api/",e=new URLSearchParams({key:"43021441-25d1e61ac4c3414aff6179b78",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${t}?${e}`;return fetch(o).then(n=>n.json())}export{r as g};
//# sourceMappingURL=pixabay-api-78f9b352.js.map
