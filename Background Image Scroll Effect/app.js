const bgImgEl =document.getElementById("bg-img");

window.addEventListener("scroll",()=>{
    updateImage();
})
function updateImage(){
    bgImgEl.style.opacity = 1 - window.pageYOffset/ 1000;
    bgImgEl.style.backgroundSize = 160 - window.pageYOffset/12 +"%";
}
