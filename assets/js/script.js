function kekuatanSandi(sandi) {
  let kekuatan = 0;

  sandi.length > 6 ? kekuatan++ : null;
  sandi.length > 10 ? kekuatan++ : null;
  /[A-Z]/.test(sandi) ? kekuatan++ : null;
  /[0-9]/.test(sandi) ? kekuatan++ : null;
  /[A-Za-z0-8]/.test(sandi) ? kekuatan++ : null;

  return kekuatan;
}

let wadah = document.querySelector(".wadah");

document.addEventListener("keyup", function (e) {
  let sandi = document.querySelector("#kataSandi").value;
  let kekuatan = kekuatanSandi(sandi);

  wadah.classList.remove("lemah");
  wadah.classList.remove("sedang");
  wadah.classList.remove("kuat");

  kekuatan <= 2
    ? wadah.classList.add("lemah")
    : kekuatan >= 2 && kekuatan <= 4
    ? wadah.classList.add("sedang")
    : wadah.classList.add("kuat");
});

let sandi = document.querySelector("#kataSandi");
let tombolTampilkan = document.querySelector(".tampilkan");

tombolTampilkan.onclick = function () {
  sandi.type === "password"
    ? (sandi.setAttribute("type", "text"),
      tombolTampilkan.classList.add("sembunyikan"))
    : (sandi.setAttribute("type", "password"),
      tombolTampilkan.classList.remove("sembunyikan"));
};
