
//* Global Variables
var allImages = Array.from(document.querySelectorAll("figure img"));
var lightBox = document.querySelector("#lightBox");
var lightBoxItem = document.querySelector("#lightBoxItem");
var closeBtn = document.querySelector("#close");
var prevBtn = document.querySelector("#prev");
var nextBtn = document.querySelector("#next");
var currentIndex;

for( var i=0 ; i<allImages.length ; i++){
    allImages[i].addEventListener("click" , function(e){
       var clickedImage = e.target.getAttribute('src');
       currentIndex = allImages.indexOf(e.target)
       lightBox.classList.replace("d-none","d-flex");
       lightBoxItem.style.backgroundImage = `url(${clickedImage})`;
    })
}

closeBtn.addEventListener("click" , closeSlider);
nextBtn.addEventListener("click" , nextSlide);
prevBtn.addEventListener("click" , prevSlide);

//^ To Close the slider
function closeSlider(){  
    lightBox.classList.replace("d-flex","d-none");
}

//^ Move To the Next Slider
function nextSlide(){
    currentIndex++;
    if(currentIndex == allImages.length) {currentIndex = 0} 
    var ImgSrc = allImages[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${ImgSrc})`;
}

//^ Go Back To the Previous Sliader
function prevSlide(){
    currentIndex--;
    if(currentIndex < 0) {currentIndex = allImages.length -1} 
    var ImgSrc = allImages[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${ImgSrc})`;
}

//^ To Use the Keyboard
document.addEventListener("keydown",function(e){
    console.log("Hii",e);
    switch(e.key){
        case "ArrowRight":
            nextSlide(1);
            break;
        case "ArrowLeft":
            prevSlide(-1);
            break; 
        case "Escape":
            closeSlider();
            break;    
    }
})

lightBox.addEventListener("click",function(){
    closeSlider()
})
lightBoxItem.addEventListener("click",function(e){
    e.stopPropagation()
})