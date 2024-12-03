// Slide Show JavaScript
let slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

showSlides(slideIndex);

// Play/Pause Audio
function toggleAudio() {
    const audio = document.getElementById('music');
    const button = document.getElementById('playPauseBtn');
    
    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause Music';
    } else {
        audio.pause();
        button.textContent = 'Play Music';
    }
}