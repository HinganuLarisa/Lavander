"use strict"

// Slider animation 
let firstIndex = 0;
let timer;

function automaticSlide() {
  const img = document.querySelectorAll(".img-slider");

  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  firstIndex++;

  if (firstIndex > img.length) {
    firstIndex = 1;
  }

  img[firstIndex - 1].style.display = "block";

  clearTimeout(timer);
  timer = setTimeout(automaticSlide, 2000);
}

automaticSlide();
