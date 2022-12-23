//1. cara penulisan menggunakan commonJS
// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
//   }
// const isReady = true;
// module.exports = coffeeStock //format commonJS
// console.log(module) // untuk pengecekan nilai yang di export

//2. cara penulisan menggunakan format module, key export disematkan disetiap variable yang akan di export
// export const coffeeStock = {
//         arabica: 100,
//         robusta: 150,
//         liberica: 200
//       }
// export const isReady = true;

//3. cara penulisan menggunakan format module, key export 1 kali diakhir
const coffeeStock = {
        arabica: 100,
        robusta: 150,
        liberica: 200
      }
const isReady = true;

export default {coffeeStock, isReady}


  