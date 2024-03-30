import{a as s}from"./vendor-2cfd16ce.js";async function i(t,e){const o="https://pixabay.com/api/",a=new URLSearchParams({key:"43021441-25d1e61ac4c3414aff6179b78",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),r=`${o}?${a}`;return(await s.get(r,{params:a})).data}export{i as g};
//# sourceMappingURL=pixabay-api-ac892f83.js.map
