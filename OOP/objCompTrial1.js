
// tanda ({}) digunakan untuk memberitahu interpreter bahwa kita akan membuat objek bukan perintah
const fnBelok = () => ({
    belok : (perintah = "") => {
    if (perintah === "") return "tolong di isi perintahnya";
    if (perintah === "kanan" || perintah === "Kanan" || perintah === "KANAN")  return "belok kanan";
    if (perintah === "kiri" || perintah === "Kiri" || perintah === "KIRI") return "belok kiri";
    else "ketik kiri atau kanan"
    }
    })

const fnTambahKecepatan = (self) => ({
    //self disini mengacu pada attr pada obj yang nantinya akan diisi dengan fungsi assign
    tambahKecepatan : (tambah = 0) => {
        if (tambah == 0) return "kecepatan normal, tidak ditambahkan";
        if (typeof (tambah) === "number") {
            //kecepatan menngacu pada nilai attr pada obj, sehingga tidak dapat menggunakan this, harus menggunakan self yang mengacu pada argument pembuatan obj
            self.kecepatan += tambah;
            return `kecepatan ditambah sebesar ${tambah}, kecepatan total mejadi : ${self.kecepatan}`
        }
        else return "tidak menerima selain angka"
    } 
})

const mobil = (nama = "", kecepatan = 0) => {
    const self = {nama, kecepatan};
    const perilakuSelf = (self) =>  ({sebut : () => console.log(`saya memiliki mobil baru, namanya ${self.nama}`)})
    return Object.assign (self, perilakuSelf(self), fnBelok(), fnTambahKecepatan(self))
}

const honda = mobil("honda BRV", 50);
console.log(honda);
console.log(honda.tambahKecepatan(0));
console.log(honda.tambahKecepatan(5));
console.log(honda.tambahKecepatan("seratus"));

