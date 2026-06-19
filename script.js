// ===========================================================
// CodingFood — script.js
// Catatan: selector "loginForm" dan ".switch-box button" pada
// versi sebelumnya tidak cocok dengan elemen apa pun di
// halaman ini, sehingga tombol terkait tidak akan berfungsi.
// Script ini disesuaikan agar semua tombol benar-benar bekerja.
// ===========================================================

document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------------------------------
    // Tab switch (jika suatu saat ada elemen .switch-box button)
    // Dibuat aman: hanya berjalan kalau elemennya memang ada.
    // -------------------------------------------------------
    const tabs = document.querySelectorAll(".switch-box button");  // Mengambil semua tombol di dalam .switch-box.

    if (tabs.length > 0) //Pengecekan aman — kode hanya jalan kalau tombolnya memang ada.
         {
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(btn => btn.classList.remove("active"));
                tab.classList.add("active");
            });
        });
    }

    // -------------------------------------------------------
    // Form Pendaftaran Karyawan (index.html)
    // id disesuaikan menjadi "pendaftaranForm" agar sesuai
    // dengan id yang benar-benar ada di halaman.
    // -------------------------------------------------------
    const pendaftaranForm = document.getElementById("pendaftaranForm");  //Mengambil elemen form berdasarkan id.

    if (pendaftaranForm) {
        pendaftaranForm.addEventListener("submit", function (e) {
            e.preventDefault();  //Mencegah halaman reload/pindah seperti biasanya
            alert("Pendaftaran berhasil! Tim kami akan segera menghubungi Anda.");  //Menampilkan pesan sukses ke pengguna
            pendaftaranForm.reset(); //Mengosongkan semua isian form
        });
    }

});