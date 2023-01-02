//Örnek-1
// console.log("Javascript practice ilk dersi başladı");
// console.warn("Uyarı amacli kullanilir");
// console.error("Hatalari gösterme amaçli kullanilir");

//Örnek-2
// alert("Bu bir uyari masajidir");
// console.log(confirm("Silmek istediginizden emin misiniz?")) ;

//Örnek-3
/* let uzunKenar=prompt("Uzun kenari giriniz");
let kisaKenar=prompt("Kisa kenari giriniz");
let alan=Number(uzunKenar) * Number(kisaKenar);
console.log(`Dikdortgenin Alani = ${alan}'dir`);
alert(`Dikdortgenin Alani = ${alan}'dir.`); */

//Örnek-4
/* let pi=3.14;
console.log(typeof pi);

let deger=true;
console.log(typeof(deger));

let deger2="deneme";
console.log(typeof(deger2)); */

//Örnek-5
/* let ad1 = "Ali";
let ad2 = "Oya";
let ad3 = "Can";
let ad4 = null;
let ad5 = "";
let ad6 = undefined;
console.log(ad1 && ad2 && ad3); //can
console.log(ad1 && ad2 && ad4 && ad3); //null
console.log(ad4 || ad5 || ad2 || ad6); //Oya
console.log(ad4 || ad5 || false || ad6); //undefined */

//Örnek-6
/* let x = 40;
let y = "30";
console.log(x == "40"); //true
console.log(y === 30n); //false
console.log(y !== 30n); //true
console.log(x > y + 10); //false
console.log(x < y + 10); //true */

//Örnek-7
/* const sayi = 254;
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100) % 10;
const toplam = birler + onlar + yuzler;
console.log(`${sayi} sayisinin rakamlari toplami = ${toplam}`); */

//Örnek-8
/* let a = 5;
let b = --a; //b=4 a=4
let c = b++; //c=4 b=5
console.log(a, b, c);//4 5 4 */

//Örnek-9
/* const sayi1 = 5;
const sayi2 = -7;
const isim = "John";
const sifir = 0;
const hic = null;
const bos = "";
const tanimsiz = undefined;
const sayiDegil = NaN;
console.log(Boolean(sayi1));
console.log(
  Boolean(bos),
  Boolean(hic),
  Boolean(sifir),
  Boolean(tanimsiz),
  Boolean(sayiDegil)
); */

//Örnek-10
/* let isim = prompt("Lütfen isminizi giriniz");
if (!isim) {
  alert("İsminizi girmediniz");
} else {
  alert(`Hosgeldiniz Sayin ${isim}`);
} */

//Örnek-11
/* let giris = true;
let cikis = false;
console.log(!giris || cikis || giris);//true
console.log(!giris || cikis);//false
console.log((giris && cikis) || (!cikis && !giris));//false */
