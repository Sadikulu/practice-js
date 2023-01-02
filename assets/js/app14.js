let image = document.querySelector(".resim");
document.querySelector(".on").addEventListener("click", () => {
  image.src = "../assets/img/lamba_on.gif";
});
document.querySelector(".of").addEventListener("click", () => {
  image.src = "../assets/img/lamba_off.gif";
});
image.addEventListener("mouseover", () => {
  image.src = "../assets/img/lamba_on.gif";
});
image.addEventListener("mouseout", () => {
  image.src = "../assets/img/lamba_off.gif";
});
