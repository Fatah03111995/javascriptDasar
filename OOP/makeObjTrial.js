// 1. menggunakan OOP JS
class Makanan {
    constructor (nama, energi) {
        this.nama = nama ;
        this.energi = energi;
    }
    static {
        console.log("static init.. ini otomatis dijalankan ketika dilakukan instance pertama kali")
    }

    makan () {console.log ("dari func makan : nyam-nyam")} //method di javascript tidak memerlukan key function, akan otomatis masuk ke prototype
    minum = () => console.log("dari func minum : gleg gleg") //syntax anonymous func, tidak ada key let atau const, akan masuk sbg attrib/properti method
    //jika igin membuat attr atau properti untuk class, bisa di tulis di luar func constructor, penulisannya tanpa menggunakan key let atau const.
    // let makan = "enak" ----> NOTE : tidak dapat menulis variable, attr, diluar constructor
}
const donat = new Makanan ("donat", 50);
console.log (donat);
console.log (donat.makan());
console.log (donat.minum());
console.log (donat instanceof Makanan);


//2. menggunakan fungsi
function Nama (nama) { //umunya penulisan nama nya dengan kapital diawal, untuk membedakan fungsi untuk membuat kelas dengan fungsi biasa
    this.nama = nama;
}
const namaFatah = new Nama ("fatah"); // jika tanpa key new maka perlu return sebeluh tutup kurawal dan key this tidak berfungsi
console.log (namaFatah);
console.log(namaFatah instanceof (Nama)); //walaupun ditulis dengan syntax function, tapi di interpreter fungsi ini memiliki constructor

//3. menggunakan anonymous function
//----> NOTE : syntax ini tidak memiliki constructor, sehingga tidak dapat dilakukan pengecekan, apakah kelas yang dibentuk dari instance class kelas atau bukan
const kelas = kelas => {
    const kelasNEw = {
        kelas //kelas : kelas --> nama attr sama dengan nama param, maka cukup ditulis kelas saja
    } 
    return kelasNEw
}
const kelasFatah = kelas ("empat"); // contoh syntax jika tidak menggunakan key new
console.log(kelasFatah);
// console.log (kelasFatah instanceof kelas); --> error jika melakukan pengecekan
