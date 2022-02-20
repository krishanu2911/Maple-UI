const sliderImages = document.querySelectorAll(".slider-image");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const hideClass = document.querySelector(".slider-hide");
const showClass = document.querySelector(".slider-show");
const noOfImage = sliderImages.length;
var currentImagePosi = 0;
prevBtn.addEventListener("click" ,prevImage);
nextBtn.addEventListener("click" ,nextImage);
function imageStateUpate(){
    for(let image of sliderImages){
        image.classList.remove('slider-show');
        image.classList.add('slider-hide');
    }
    sliderImages[currentImagePosi].classList.add('slider-show');
}
function prevImage () {
    if(currentImagePosi === noOfImage -1){
        currentImagePosi = 0;
    }else{
        currentImagePosi++;
    }
    imageStateUpate();
}
function nextImage () {
    if(currentImagePosi === 0){
        currentImagePosi = noOfImage -1;
    }else{
        currentImagePosi--;
    }
    imageStateUpate();
    console.log("next")
}
