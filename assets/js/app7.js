let mesaj = document.querySelector("#msg");
function hesapla() {
  let vize = document.querySelector("#vize").value;
  let final = document.querySelector("#final").value;
  const sonuc = vize * 0.4 + final * 0.6;
  let not = "";
  switch (true) {
    case sonuc < 30:
      not = "FF";
      break;
    case sonuc < 40:
      not = "DD";
      break;
    case sonuc < 50:
      not = "DC";
      break;
    case sonuc < 60:
      not = "CC";
      break;
    case sonuc < 70:
      not = "CB";
      break;
    case sonuc < 80:
      not = "BB";
      break;
    case sonuc < 90:
      not = "BA";
      break;
    case sonuc < 100:
      not = "AA";
      break;
    default:
      not = "Hatalı Not";
      break;
  }
  mesaj.classList.remove("d-none");
  mesaj.classList.add("mesaj");
  mesaj.innerText = `Ortalamaniz : ${sonuc}, Notunuz : ${not}`;
}
function sil() {
  document.querySelector("#msg").innerText = "";
  document.querySelector("#msg").classList.add("d-none");
}
