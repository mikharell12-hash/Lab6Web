'use strict';

// Contoh selector CSS: tampilkan jumlah latihan yang ditemukan di DOM.
const latihanElements = document.querySelectorAll('.exercise');
const tagPraktikum = document.querySelector('.header-tag');
tagPraktikum.textContent = latihanElements.length + ' Latihan + Mini Project';

// Latihan 1 — Mengubah teks dengan DOM
const judul = document.getElementById('judul');
const pesan = document.getElementById('pesan');
const ubahTeksDom = document.getElementById('ubahTeksDom');
ubahTeksDom.addEventListener('click', function () {
  judul.textContent = 'Belajar JavaScript DOM';
  pesan.textContent = 'Konten berhasil diubah oleh JavaScript.';
  pesan.className = 'message success';
});

// Latihan 2 — Event click dan waktu
const tombolAksi = document.getElementById('tombolAksi');
const pesanWaktu = document.getElementById('pesanWaktu');
tombolAksi.addEventListener('click', function () {
  pesanWaktu.textContent = 'Tombol diklik pada ' + new Date().toLocaleTimeString('id-ID');
  pesanWaktu.className = 'message success';
});

// Latihan 3 — Mengubah class CSS
const tombolGaya = document.getElementById('tombolGaya');
const teksGaya = document.getElementById('teksGaya');
tombolGaya.addEventListener('click', function () {
  teksGaya.classList.toggle('highlight');
  teksGaya.classList.toggle('teks-besar');
  tombolGaya.textContent = teksGaya.classList.contains('highlight') ? 'Kembalikan gaya' : 'Toggle gaya';
});

// Latihan 4 — Penghitung karakter saat event input
const namaInput = document.getElementById('namaInput');
const jumlahKarakter = document.getElementById('jumlahKarakter');
const counterProgress = document.getElementById('counterProgress');
namaInput.addEventListener('input', function () {
  jumlahKarakter.textContent = namaInput.value.length;
  counterProgress.style.width = (namaInput.value.length / 40 * 100) + '%';
});

// Latihan 5 — Validasi form pendaftaran
const formPendaftaran = document.getElementById('formPendaftaran');
const pesanForm = document.getElementById('pesanForm');
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function tampilkanPesan(elemen, pesanTeks, tipe) {
  elemen.textContent = pesanTeks;
  elemen.className = 'message ' + tipe;
}
formPendaftaran.addEventListener('submit', function (event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const usiaInput = document.getElementById('usia').value;
  const usia = Number(usiaInput);

  if (nama === '') {
    tampilkanPesan(pesanForm, 'Nama wajib diisi.', 'error');
  } else if (!polaEmail.test(email)) {
    tampilkanPesan(pesanForm, 'Masukkan email yang valid.', 'error');
  } else if (usiaInput === '' || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    tampilkanPesan(pesanForm, 'Usia harus berupa bilangan bulat 17–100.', 'error');
  } else {
    tampilkanPesan(pesanForm, 'Validasi berhasil. Form siap diproses.', 'success');
    formPendaftaran.reset();
  }
});

// Latihan 6 — To-do List, dengan fitur eksperimen hapus item
const formTugas = document.getElementById('formTugas');
const inputTugas = document.getElementById('inputTugas');
const daftarTugas = document.getElementById('daftarTugas');
const pesanTugas = document.getElementById('pesanTugas');
formTugas.addEventListener('submit', function (event) {
  event.preventDefault();
  const teks = inputTugas.value.trim();
  if (teks === '') {
    tampilkanPesan(pesanTugas, 'Tulis tugas terlebih dahulu.', 'error');
    return;
  }
  const item = document.createElement('li');
  const label = document.createElement('span');
  label.className = 'task-label';
  label.textContent = teks;

  const actions = document.createElement('div');
  actions.className = 'task-actions';
  const selesai = document.createElement('button');
  selesai.type = 'button';
  selesai.textContent = 'Tandai selesai';
  selesai.setAttribute('aria-pressed', 'false');
  selesai.addEventListener('click', function () {
    item.classList.toggle('selesai');
    const isSelesai = item.classList.contains('selesai');
    selesai.textContent = isSelesai ? 'Batalkan' : 'Tandai selesai';
    selesai.setAttribute('aria-pressed', String(isSelesai));
  });

  const hapus = document.createElement('button');
  hapus.type = 'button';
  hapus.textContent = 'Hapus';
  hapus.addEventListener('click', function () {
    item.remove();
    tampilkanPesan(pesanTugas, 'Satu tugas berhasil dihapus.', 'info');
  });
  actions.append(selesai, hapus);
  item.append(label, actions);
  daftarTugas.appendChild(item);
  inputTugas.value = '';
  tampilkanPesan(pesanTugas, 'Tugas ditambahkan.', 'success');
  inputTugas.focus();
});

// Mini Project — Form Pendaftaran Workshop
const formWorkshop = document.querySelector('#formWorkshop');
const namaWorkshop = document.getElementById('namaWorkshop');
const emailWorkshop = document.getElementById('emailWorkshop');
const sesiWorkshop = document.getElementById('sesiWorkshop');
const catatanWorkshop = document.getElementById('catatanWorkshop');
const pesanWorkshop = document.getElementById('pesanWorkshop');
const jumlahNamaWorkshop = document.getElementById('jumlahNamaWorkshop');
const jumlahCatatan = document.getElementById('jumlahCatatan');
const infoSesi = document.getElementById('infoSesi');
const ringkasanNama = document.getElementById('ringkasanNama');
const ringkasanEmail = document.getElementById('ringkasanEmail');
const ringkasanSesi = document.getElementById('ringkasanSesi');
const ringkasanCatatan = document.getElementById('ringkasanCatatan');
const ringkasanWorkshop = document.getElementById('ringkasanWorkshop');

function isiRingkasan() {
  ringkasanNama.textContent = namaWorkshop.value.trim() || 'Belum diisi';
  ringkasanEmail.textContent = emailWorkshop.value.trim() || 'Belum diisi';
  ringkasanSesi.textContent = sesiWorkshop.value || 'Belum dipilih';
  ringkasanCatatan.textContent = catatanWorkshop.value.trim() || 'Belum ada';
  jumlahNamaWorkshop.textContent = namaWorkshop.value.length;
  jumlahCatatan.textContent = catatanWorkshop.value.length;
}
[namaWorkshop, emailWorkshop, catatanWorkshop].forEach(function (input) {
  input.addEventListener('input', isiRingkasan);
});
sesiWorkshop.addEventListener('change', function () {
  infoSesi.textContent = sesiWorkshop.value ? 'Sesi dipilih: ' + sesiWorkshop.value : 'Sesi yang kamu pilih akan ditampilkan di sini.';
  isiRingkasan();
});
formWorkshop.addEventListener('submit', function (event) {
  event.preventDefault();
  const nama = namaWorkshop.value.trim();
  const email = emailWorkshop.value.trim();
  const sesi = sesiWorkshop.value;
  if (nama.length < 3) {
    tampilkanPesan(pesanWorkshop, 'Nama harus diisi minimal 3 karakter.', 'error');
    namaWorkshop.focus();
  } else if (!polaEmail.test(email)) {
    tampilkanPesan(pesanWorkshop, 'Masukkan alamat email dengan format yang valid.', 'error');
    emailWorkshop.focus();
  } else if (sesi === '') {
    tampilkanPesan(pesanWorkshop, 'Silakan pilih sesi workshop terlebih dahulu.', 'error');
    sesiWorkshop.focus();
  } else {
    tampilkanPesan(pesanWorkshop, 'Pendaftaran berhasil divalidasi! Ringkasan data ditampilkan di sebelah kanan.', 'success');
    ringkasanWorkshop.classList.add('summary-success');
  }
});

document.getElementById('resetWorkshop').addEventListener('click', function () {
  formWorkshop.reset();
  tampilkanPesan(pesanWorkshop, 'Form telah direset. Silakan isi kembali.', 'info');
  infoSesi.textContent = 'Sesi yang kamu pilih akan ditampilkan di sini.';
  ringkasanWorkshop.classList.remove('summary-success');
  isiRingkasan();
});

// Eksperimen mandiri 2 — uji nama kurang dari tiga karakter
const isiNamaPendek = document.getElementById('isiNamaPendek');
isiNamaPendek.addEventListener('click', function () {
  namaWorkshop.value = 'Al';
  namaWorkshop.dispatchEvent(new Event('input', { bubbles: true }));
  tampilkanPesan(pesanWorkshop, 'Contoh nama pendek terisi. Klik Daftar workshop untuk melihat validasinya.', 'info');
  namaWorkshop.focus();
});

// Eksperimen mandiri 3 — event change pada dropdown sesi
const pilihSesiPagi = document.getElementById('pilihSesiPagi');
pilihSesiPagi.addEventListener('click', function () {
  sesiWorkshop.value = 'Sesi Pagi (09.00–12.00)';
  sesiWorkshop.dispatchEvent(new Event('change', { bubbles: true }));
});

// Eksperimen mandiri 4 — menyembunyikan dan menampilkan paragraf dengan class
const toggleParagraf = document.getElementById('toggleParagraf');
const paragrafToggle = document.getElementById('paragrafToggle');
toggleParagraf.addEventListener('click', function () {
  paragrafToggle.classList.toggle('hidden');
  const disembunyikan = paragrafToggle.classList.contains('hidden');
  toggleParagraf.textContent = disembunyikan ? 'Tampilkan paragraf' : 'Sembunyikan paragraf';
});

// Isi keadaan awal ringkasan tanpa menunggu interaksi pengguna.
isiRingkasan();
