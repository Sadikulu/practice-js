let baslat = document.querySelector("#baslat");
let yukari = document.querySelector("#yukari");
let asagi = document.querySelector("#asagi");
let bitir = document.querySelector("#bitir");
let mesaj = document.querySelector("#mesaj");
let hak = 0,
  alt = 1,
  ust = 100,
  tahmin = 0;
baslat.addEventListener("click", () => {
  hak = 0;
  alt = 1;
  ust = 100;
  tahmin = 0;
  baslat.disabled = true;
  yukari.disabled = false;
  asagi.disabled = false;
  bitir.disabled = false;
  sayiTahmin();
});
const sayiTahmin = () => {
  tahmin = Math.floor(Math.random() * (ust - alt + 1) + alt);
  hak++;
  mesaj.innerHTML = `Bilgisayarin tahmini : ${tahmin} <br>
                     <span style="color:red;">Kalan Hak : ${10 - hak}</span>`;
  if (hak == 10) {
    mesaj.innerHTML = "hakkiniz doldu, Oyunu kaybettiniz";
    oyunBitir();
  }
};
yukari.addEventListener("click", () => {
  alt = tahmin;
  sayiTahmin();
});
asagi.addEventListener("click", () => {
  ust = tahmin;
  sayiTahmin();
});
bitir.addEventListener("click", () => {
  mesaj.innerHTML = `Tebrikler, ${hak} hakkinizda oyunu kazandiniz`;
  oyunBitir();
});
const oyunBitir = () => {
  baslat.disabled = false;
  yukari.disabled = true;
  asagi.disabled = true;
  bitir.disabled = true;
};
