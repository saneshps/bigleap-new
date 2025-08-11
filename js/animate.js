const mouseOverSection = document.querySelector(".hero-area-start");
const hangingImages = document.querySelector("#character-img");

mouseOverSection.addEventListener("mouseover", function () {
  hangingImages.classList.add("hanging-swing-in");
  hangingImages.classList.remove("hanging-swing-out");
});
mouseOverSection.addEventListener("mouseout", function () {
  hangingImages.classList.remove("hanging-swing-in");
  hangingImages.classList.add("hanging-swing-out");
});

// const yeehaImg = document.getElementById("yeeha-img");
// const img360 = document.getElementById("img360");
// const characterImg = document.getElementById("character-img");
// let timeoutId = null;

// hangingImages.addEventListener("mouseenter", function () {
//   yeehaImg.classList.add("sway");
//   characterImg.classList.add("sway");

//   timeoutId = setTimeout(function () {
//     yeehaImg.style.display = "none";
//     img360.style.display = "block";
//     img360.classList.remove("hanging-swing-in"); // Reset animation
//     void img360.offsetWidth; // Force reflow
//     img360.classList.add("hanging-swing-in");
//   }, 2000);
// });

// hangingImages.addEventListener("mouseleave", function () {
//   clearTimeout(timeoutId);
//   yeehaImg.style.display = "block";
//   img360.style.display = "none";
//   yeehaImg.classList.remove("sway");
//   characterImg.classList.remove("sway");
//   img360.classList.remove("hanging-swing-in");
// });
