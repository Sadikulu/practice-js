function ustAl() {
  const taban = document.querySelector("#taban").value;
  const us = document.querySelector("#us").value;
  const sonuc = Number(taban) ** Number(us);
  const msgSonuc = document.querySelector(".sonuc");
  msgSonuc.classList.add("ekle");
  msgSonuc.innerHTML = `<b>${taban}<sup>${us}</sup> = ${sonuc}</b>`;
}
