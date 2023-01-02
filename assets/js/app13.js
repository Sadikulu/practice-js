//Kullanıcıya ürün ve fiyat bilgisi girdirelim, 1500 TL ile bu üründen kaç adet
// alabileceğini ekrana yazdıralım.(Do While kullanarak yapalım)

let urunEl = document.querySelector("#urun");
let fiyatEl = document.querySelector("#fiyat");
let mesaj = document.querySelector("#mesaj");
let hesap = document.querySelector("#hesapla");
hesap.addEventListener("click", () => {
  let urun = urunEl.value;
  let fiyat = fiyatEl.value;

  let sayac = 0;
  let toplam = 0;

  do {
    toplam = sayac * fiyat;
    if (toplam > 1500) {
      toplam -= fiyat;
      sayac--;
      break;
    }
    sayac++;
  } while (toplam <= 1500);
  mesaj.innerHTML = `${urun} adli üründen ${toplam} TL ödeyerek ${sayac} tane alabilirsiniz`;
});
