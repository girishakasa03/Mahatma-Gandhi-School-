// ==============================
// STICKY NAVBAR
// ==============================

window.addEventListener("scroll", function () {

  const navbar = document.querySelector("nav");

  if (navbar) {
    navbar.classList.toggle("sticky", window.scrollY > 50);
  }

});


// ==============================
// HERO SLIDER
// ==============================

const heroSlides = document.querySelectorAll(".slide");

if (heroSlides.length > 0) {

  let heroIndex = 0;

  setInterval(() => {

    heroSlides[heroIndex].classList.remove("active");

    heroIndex++;

    if (heroIndex >= heroSlides.length) {
      heroIndex = 0;
    }

    heroSlides[heroIndex].classList.add("active");

  }, 3000);

}


// ==============================
// EVENT IMAGE SLIDER
// ==============================

const sliders = document.querySelectorAll(".event-slider");

sliders.forEach(slider => {

  const images = slider.querySelectorAll(".slide-img");

  const nextBtn = slider.querySelector(".next");

  const prevBtn = slider.querySelector(".prev");

  let current = 0;

  function showSlide(index){

    images.forEach(img => {
      img.classList.remove("active");
    });

    images[index].classList.add("active");

  }

  nextBtn.addEventListener("click", () => {

    current++;

    if(current >= images.length){
      current = 0;
    }

    showSlide(current);

  });

  prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){
      current = images.length - 1;
    }

    showSlide(current);

  });

});


// ==============================
// IMAGE POPUP
// ==============================

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const closePopup = document.querySelector(".close-popup");

const galleryImages = document.querySelectorAll(".slide-img");

galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    popup.style.display = "flex";

    popupImg.src = img.src;

  });

});

if(closePopup){

  closePopup.addEventListener("click", () => {

    popup.style.display = "none";

  });

}

if(popup){

  popup.addEventListener("click", (e) => {

    if(e.target === popup){
      popup.style.display = "none";
    }

  });

}


// ==============================
// PAGE LOADED
// ==============================

window.addEventListener("load", function () {

  console.log("Website Loaded Successfully");

});