barang_jual = [
  { kode: "001", barang: "A", harga: 10000 },
  { kode: "002", barang: "B", harga: 20000 },
  { kode: "003", barang: "C", harga: 30000 },
];

var listBarangTabel = document.getElementById("listTabelBarang");

barang_jual.forEach(function (item) {
  var { kode, barang, harga } = item;
  var row = listBarangTabel.insertRow(listBarangTabel.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = kode;
  cell2.innerHTML = barang;
  cell3.innerHTML = "Rp " + harga.toFixed(2);
});

function tambahkanBarang() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var banyakBarang = document.getElementById("banyakBarang").value;
  var selectedItem = barang_jual.find((item) => item.kode === kodeBarang);
  var totalPembayaran;
  if (selectedItem) {
    totalPembayaran = selectedItem.harga * banyakBarang;
    alert("Total pembayaran adalah: Rp " + totalPembayaran.toFixed(2));

    var uang = prompt("masukkan uang user:");
    var kembalian = uang - totalPembayaran;
    if (uang < totalPembayaran) {
      alert("uang anda tidak cukup");
    } else {
      alert("\ntotal kembalian: Rp " + kembalian);
    }
  }
}
