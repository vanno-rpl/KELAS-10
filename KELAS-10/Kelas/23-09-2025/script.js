var nilai = 75;
var hasilTes = "";

if (nilai >= 80) {
    hasilTes = "Kamu Jenius"
    document.getElementById("hasil").innerHTML = hasilTes;
} else if (nilai >= 70) {
    hasilTes = "Kamu Pintar"
    document.getElementById("hasil").innerHTML = hasilTes;
} else {
    hasilTes = "Kamu Gagal"
    document.getElementById("hasil").innerHTML = hasilTes;
}