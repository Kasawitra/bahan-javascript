var jlhAngkot = 10;
var angkotBeroperasi = 6;


for (var noAngkot = 1; noAngkot <= jlhAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5){
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
} else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log ('Angkot No. ' + noAngkot + ' sedang Lembur.');
} else {
    console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.');
}
}