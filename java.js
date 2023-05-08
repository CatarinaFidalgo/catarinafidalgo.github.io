let slideIndex = 1;
const slideCountTotal = 8;

for (let i = 1; i <= slideCountTotal; i++) {
    showSlides(slideIndex, i);
}


// Next/previous controls
function plusSlides(n, slideCount) {
    showSlides(slideIndex += n, slideCount);
}

// Thumbnail image controls
function currentSlide(n, slideCount) {
    showSlides(slideIndex = n, slideCount);
}

function showSlides(n, slideCount) {
    
    let i;
    let slides = document.getElementsByClassName("mySlides" + slideCount);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}