alert('Tebak Angka! \n Tebak Angka antara 1 sampai dengan 10');


var lagi = true;

while (lagi) {
    var randomNum = Math.floor(Math.random() * 10) + 1;
for (var life = 3; life >= 1; life--) {
    var angkaUser = prompt('Masukkan Angka: ' + randomNum + '\n Anda Mempunyai ' + life + ' kesempatan');

    if (angkaUser > randomNum) {
        alert('Tebakan anda terlalu tinggi!');
    } else if (angkaUser < randomNum){
        alert('Tebakan anda terlalu rendah!');
    } else if (angkaUser == randomNum) {
        alert('Tebakan anda tepat sekali! \n Angka yang benar adalah ' + randomNum);
        life -= life;
    }
console.log(angkaUser);
    while (life == 1){
    alert('Kesempatan anda sudah habis \n Angka yang benar adalah ' + randomNum);
    life--
    }
}

lagi = confirm('Ingin bermain lagi ?')
}

alert('Terima Kasih dan Sampai Berjumpa Lagi!')
