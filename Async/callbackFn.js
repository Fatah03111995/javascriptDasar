// menangani nilai yang didapatkan secara async dalam program sync

//case 1
// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }
 
// const coffee = orderCoffee();
// console.log(coffee)// nilai cofee akan tetap null, karena prosesnya async maka return dijalankan bahkan sebelum setTimout selesai dijalankan

const orderCoffee = param => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";// nilai yang didapat secara async
        param(coffee); //param yang dimasukkan adalah fungsi yang akan diapanggil di dalam blok set timeout
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});
