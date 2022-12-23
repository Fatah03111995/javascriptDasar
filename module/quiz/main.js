//1. menggunakan commonJS
const Wolf = require ('./Wolf.js');
const Tiger = require ('./Tiger.js');

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
      return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
      return wolf.howl();
    }
    return 'Harimau dan serigala sama-sama kuat!';
  };
  
  const myTiger = new Tiger();
  const myWolf = new Wolf();
  const result = fight(myTiger, myWolf);
// ----> NOTE: variable pada bentuk seperti dibawah tidak bisa ditangkap oleh import, so.. masukkan sebagai object
//   module.exports = fight;
//   module.exports = myTiger;
//   module.exports = myWolf;
//   module.exports = result;
module.exports = {
    fight, myTiger, myWolf, result
}

// 2. menggunakan module
// import Tiger from './Tiger.js'
// import Wolf from './Wolf.js';
// const fight = (tiger, wolf) => {
//     if (tiger.strength > wolf.strength) {
//       return tiger.growl();
//     }
//     if (wolf.strength > tiger.strength) {
//       return wolf.howl();
//     }
//     return 'Harimau dan serigala sama-sama kuat!';
//   };
  
//   const myTiger = new Tiger();
//   const myWolf = new Wolf();
//   const result = fight(myTiger, myWolf);
//   console.log(result);
//   console.log(myTiger instanceof Tiger);


  