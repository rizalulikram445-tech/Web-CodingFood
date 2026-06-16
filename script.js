
// Mengambil semua tombol yang ada di dalam class "switch-box" lalu menyimpan dalam satu fariabel tab
const tabs = document.querySelectorAll(".switch-box button");

// Melakukan perulangan untuk setiap tombol
tabs.forEach(tab => {

    // Memberikan clik pada setiap tombol even listener
    tab.addEventListener("click", () => {

        // Menghapus class "active" dari semua tombol
        tabs.forEach(btn => btn.classList.remove("active"));

        // Menambahkan class "active" ke tombol yang diklik
        tab.classList.add("active");
    });
});


// Mengambil form yang memiliki id="loginForm"
document.getElementById("loginForm")

    // Menambahkan event saat form disubmit
    .addEventListener("submit", function(e){

        // Mencegah halaman refresh saat tombol submit ditekan
        e.preventDefault();

        // Menampilkan pesan popup
        alert("Login berhasil!");
});


