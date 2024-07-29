document.addEventListener("DOMContentLoaded", function () {
     const images = [
          "/pictures/clinic1.jpg",
          "/pictures/clinic2.jpeg",
          "/pictures/clinic3.jpg",
          "/pictures/clinic4.jpg",
          "/pictures/clinic5.jpg"
     ];
     let currentIndex = 0;

     const imageSlider = document.getElementById("imageSlider");
     const prevBtn = document.getElementById("prev");
     const nextBtn = document.getElementById("next");

     nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % images.length;
          updateSliderImage();
     });

     prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateSliderImage();
     });

     function updateSliderImage() {
          imageSlider.innerHTML = `<img src="${images[currentIndex]}" alt="clinic ${currentIndex + 1}">`;
     }
});