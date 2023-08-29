var jlhAngkot = 10;
var angkotBeroperasi = 6;


for (var noAngkot = 1; noAngkot <= jlhAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
} else {
    console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.');
}
}