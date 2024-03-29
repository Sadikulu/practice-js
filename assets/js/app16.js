// 1- Bir dizideki pozitif ve çift sayıların toplamını ve adedini bulun.
const dizi = [-5, 6, 3, -5, -7, 4, 12, -58, 72];

let adet = 0;
let toplam = 0;
/* for (let i = 0; i < dizi.length; i++) {
  let start = dizi[i] > 0 && dizi[i] % 2 == 0;
  if (start) {
    toplam += dizi[i];
    adet++;
  }
} */
for (let item of dizi) {
  let start = item > 0 && item % 2 == 0;
  if (start) {
    toplam += item;
    adet++;
  }
}
console.log(`${adet} adet sayinin toplami : ${toplam}`);

// 2- Ülke ve başkentlerin yazılı olduğu dizilerinde eşleşen indis elemanlarını birleştirerek ayrı bir diziye atın.
const ulkeler = [
  "Türkiye",
  "Almanya",
  "Fransa",
  "Hollanda",
  "İtalya",
  "İspanya",
  "Portekiz",
];
const baskentler = [
  "Ankara",
  "Berlin",
  "Paris",
  "Amsterdam",
  "Roma",
  "Madrid",
  "Lizbon",
];
const birlesikDizi = [];
for (let i in ulkeler) {
  birlesikDizi[i] = ulkeler[i] + "-" + baskentler[i];
}
console.log(birlesikDizi);
//3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli olarak değiştirip alfabetik hale getirip yazdırın.
let ulkeler1 = [
  "Türkiye",
  "Almanya",
  "Fransa",
  "Hollanda",
  "İtalya",
  "İspanya",
  "Portekiz",
];
let yeniDizi = [];
ulkeler1 = ulkeler1.sort((a, b) => a.localeCompare(b));
console.log(ulkeler1);
for (let item of ulkeler1) {
  item = item.substring(0, 3).toLocaleUpperCase();
  yeniDizi.push(item);
}
console.log(yeniDizi);
// 4- Dizideki herbir elemanın 2 katının mutlak değerini alıp başka bir diziye atın.
// Yeni dinin elemanları azalan şekilde sıralansın.
let dizi1 = [-5, 6, 3, -5, -7, 4, 12, -58, 72];
let yeniDizi1 = [];
dizi1.forEach((item, index) => {
  yeniDizi1[index] = Math.abs(item * 2);
});
yeniDizi1 = yeniDizi1.sort((a, b) => b - a);
console.log(yeniDizi1);
// 5- Dizideki elemanlardan uzunluğu belirtilen sayıya eşit olanaları ayrı bir dizide saklayan uygulamayı yapın.
const isimler = [
  "Ali",
  "Can",
  "Kemal",
  "Ahmet",
  "Oya",
  "Selim",
  "Mine",
  "Elif",
  "Bora",
];
let yeniIsimler = [];
const filtrele = (uzunluk) => {
  yeniIsimler = isimler.filter((isim) => isim.length == uzunluk);
  return yeniIsimler;
};
console.log(filtrele(3));
// 6- Dizideki sayıların ortalamasını bulun ortalamadan yüksek olanları başka bir diziye atarak yazdırın.
const notlar1 = [38, 62, 74, 28, 86, 67, 92, 100, 56, 94, 72];
let toplam1 = notlar1.reduce((x, y) => x + y, 0);
let ortalama = Math.round(toplam1 / notlar1.length);
const ortalamaUstu = () => {
  const ortUstu = notlar1.filter((t) => t > ortalama);
  return ortUstu;
};
console.log(ortalama);
console.log(ortalamaUstu());
//7- Dizideki notların ortalamasını bulun, ortalamadan yuksek olanların ortalamasını %20, düşük olanların ortalamasını %10 artırarak yeni diziye atalım.
const notlar = [
  { ad: "Ali Can", not: 38 },
  { ad: "Veli Kan", not: 62 },
  { ad: "Oya Tan", not: 74 },
  { ad: "Elif Han", not: 28 },
  { ad: "Mine San", not: 86 },
  { ad: "Mert Er", not: 67 },
  { ad: "Bora Fer", not: 92 },
  { ad: "Ayşe Yilmaz", not: 100 },
  { ad: "İlke Cansiz", not: 56 },
  { ad: "Sude Canli", not: 94 },
  { ad: "Bade Sert", not: 72 },
];
let ort = notlar.reduce((x, y) => x + y.not, 0);
ort = (ort / notlar.length).toFixed(2);
const yeniNotlar = notlar.map((item) => {
  if (item.not > ort) {
    item.not = (item.not * 1.2).toFixed(2);
  } else {
    item.not = (item.not * 1.1).toFixed(2);
  }
  return item;
});
console.log(yeniNotlar);
