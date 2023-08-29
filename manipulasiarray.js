// Manipulasi Array

// 1. Menambahkan isi Array
// var arr = ['a',1,true];
// console.log(arr);

// 2. Menghapus isi Array
// var arr = ['kasa','witra','johana'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// var arr = ['kasa','witra','johana'];

// for (var i=0; i < arr.length; i++){
//     console.log('Mahasiswa ke ' + (i+1) + ' : ' + arr[i]);
// }

// Method pada Array
// 1.Join
var arr = ['kasa','witra','johana'];
// console.log(arr.join(' - '));

// 2.Push (Menambah) & Pop (Menghapus) Elemen terakhir
// arr.push('Raito','Virya');
// arr.pop();


// 3.Unshift(Menambah) & Shift (Menghapus) Elemen awal
// arr.unshift('Raito')
// arr.shift();

// 4. Splice (Menyisipkan Elemen)
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 1, 'Raito','Virya');

// 5. Slice (mengambil beberapa bagian array)
// slice(awal, akhir)
// var arr2 = arr.slice (0,2);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e){
//     console.log(e);
// });

// var nama = ['Kasa','Witra','Johana','Tanaka'];
// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// 7. map
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [10,4,8,9,4,2,4,8];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & Find (menemukan 1 nilai)
// var angka = [10,4,8,9,4,2,4,8];
// var angka2 = angka.filter(function(x){
//     return x > 8;
// });
// console.log(angka2);