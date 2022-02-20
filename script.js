const perkwh = document.querySelector(".input-kwh");
const error = document.querySelector(".error");
const modal = document.querySelector(".modals");
const tombolOK = document.querySelector(".oke");
const container = document.querySelector(".utama");

function Enter() {
  if (perkwh.value.length < 4) {
    perkwh.style.borderBottom = "1px solid red";
    error.style.display = "block";
    return false;
  } else {
    modal.style.display = "none";
    container.classList.add("no-blur");
    return true;
  }
}

function Press(event) {
  const pencet = event.key;
  if (pencet == "enter" || pencet == "Enter") {
    Enter();
  }
}

perkwh.addEventListener("textInput", function () {
  if (perkwh.value.length > 2) {
    perkwh.style.borderBottom = "1px solid black";
    error.style.display = "none";
    return true;
  } else {
    perkwh.style.borderBottom = "1px solid red";
    error.style.display = "block";
    return false;
  }
});

function Hitung() {
  const perkwh = document.querySelector(".input-kwh").value;
  const Daya = parseInt(document.querySelector(".daya-listrik").value);
  const Pemakaian = parseInt(document.querySelector(".pemakaian").value);
  const Sehari = document.querySelectorAll(".harga")[0];
  const Seminggu = document.querySelectorAll(".harga")[1];
  const Sebulan = document.querySelectorAll(".harga")[2];

  const Biaya1 = Math.floor(((Daya * Pemakaian) / 1000) * perkwh);
  const Biaya2 = Math.floor(((Daya * Pemakaian) / 1000) * perkwh * 7);
  const Biaya3 = Math.floor(((Daya * Pemakaian) / 1000) * perkwh * 30);

  Sehari.innerHTML = Biaya1.toLocaleString("en-US", {
    style: "currency",
    currency: "IDR",
  });
  Seminggu.innerHTML = Biaya2.toLocaleString("en-US", {
    style: "currency",
    currency: "IDR",
  });
  Sebulan.innerHTML = Biaya3.toLocaleString("en-US", {
    style: "currency",
    currency: "IDR",
  });
}

function darkMode() {
  const judul = document.querySelector("h1");
  const kotak = document.querySelector(".dark-mode");
  const gambar = document.querySelector(".moon");
  const container = document.querySelectorAll(".container");
  const hasil = document.querySelector(".hasil");
  const tombol = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");

  kotak.addEventListener("click", function () {
    hasil.style.boxShadow = "none";
    hasil.style.border = "none";
    document.body.classList.toggle("dark");
    judul.classList.toggle("dark-text");
    container.forEach((c) => {
      c.classList.toggle("dark-container");
    });
    tombol.forEach((t) => {
      t.classList.toggle("dark-button");
    });
    input.forEach((i) => {
      i.classList.toggle("dark-input");
    });

    if (document.body.classList.contains("dark")) {
      gambar.style.marginTop = "-50px";
    } else {
      gambar.style.marginTop = "";
    }
  });
}
darkMode();
