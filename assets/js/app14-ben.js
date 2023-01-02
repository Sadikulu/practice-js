const ac = document.querySelector("#ac");
const kapat = document.querySelector("#kapat");
const acImg = document.querySelector(".image img:last-child");
const kapatImg = document.querySelector(".image img:first-child");
const img = document.querySelector(".image");
ac.addEventListener("click", () => {
  acImg.style.display = "inline-block";
  kapatImg.style.display = "none";
});
kapat.addEventListener("click", () => {
  acImg.style.display = "none";
  kapatImg.style.display = "inline-block";
});
img.addEventListener("mouseover", () => {
  acImg.style.display = "inline-block";
  kapatImg.style.display = "none";
});
img.addEventListener("mouseout", () => {
  acImg.style.display = "none";
  kapatImg.style.display = "inline-block";
});
