const scriptURL =
  "https://script.google.com/macros/s/AKfycbzGZeCcHNpoS72La0EuHzSsBpWCNOgyW_AkUIlvF5hPiuL7pFSPiZFHs1jPHE4pb6iV/exec";
const form = document.forms["contact-form"];
const tombolKirim = document.querySelector(".tombol-kirim");
const tombolLoading = document.querySelector(".tombol-loading");
const notifikasi = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  tombolKirim.classList.toggle("d-none");
  tombolLoading.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      tombolKirim.classList.toggle("d-none");
      tombolLoading.classList.toggle("d-none");
      notifikasi.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
