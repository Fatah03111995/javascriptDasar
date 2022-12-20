//PROMISE
//new promise memiliki constructor yang terdiri dari 2 parameter. parameter pertama berisi penanganan jika proses pembuatan Promise berhasil (resolve),
//kedua berisi penanganan jika gagal (rejected).
const execute = (res,rjc) => {
    const isReady = false
    if (isReady) {
        res("berhasil, diterima") // teks yang akan dikirim jika berhasil
    } else {
        rjc("gagal, ditolak") // teks yang akan dikirim jika gagal
    }
}

const eksekusi = new Promise(execute);
//hasil dari promise berupa objek promise. belum bisa digunakan
//digunakan then() yang berisi 2 parameter
const onFullfilled = it => console.log(`berhasil : ${it}`) //teks yang dikirim jika berhasil ditangani disini
const onRejected = it => console.log(`gagal : ${it}`) // teks yang dikirim jika gagal ditangani disini

const onThen = eksekusi.then(onFullfilled,onRejected)//onrejected bisa dimasukkan kedalam parameter then
const onThenCatch = eksekusi
.then(onFullfilled)
.catch(onRejected)//onrejected juga bisa dimasukkan ke dalam fungsi catch
//penulisan then catch direkomendasikan, karena program yang baik hanya menangani satu permasalahan
