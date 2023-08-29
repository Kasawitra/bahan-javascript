var tanya = true;
while (tanya){
// menangkap pilihan player
var p = prompt('Pilih : gajah, semut, orang');

// pilihan dari komputer
// membangkitkan bilangan random
var comp = Math.random();
console.log(comp);

if (comp < 0.34) {
    comp = 'gajah';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';
// menentukan rules
if (p == comp) {
    hasil = 'Seri!';
} else if (p == 'gajah') {
    // if (comp == 'orang') {
    //     hasil = 'Menang!';
    // } else {
    //     hasil = 'Kalah!';
    // }
    hasil = ( comp == 'orang') ? 'Menang!' : 'Kalah!';
    } else if (p == 'orang'){
    // if (comp == 'gajah'){
    //     hasil = 'Kalah!';
    // } else {
    //     hasil = 'Menang!';
    // }
    hasil = (comp == 'gajah') ? 'Kalah!' : 'Menang!';
    } else if ( p == 'semut') {
    hasil = (comp == 'orang') ? 'Kalah!' : 'Menang!';
   } else {
    hasil = 'Memasukkan Pilihan yang salah!!';
   }
// tampilkan hasilnya
alert ('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);

tanya = confirm('Lagi?');
}

alert ('terima kasih sudah bermain!');

