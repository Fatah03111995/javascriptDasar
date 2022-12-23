//1. commonJS
class Wolf {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    howl() {
      return 'Auuuuuuuuu';
    }
  }

  module.exports = Wolf;

// //2. module
// class Wolf {
//     constructor() {
//       this.strength = Math.floor(Math.random() * 100);
//     }
  
//     howl() {
//       return 'Auuuuuuuuu';
//     }
//   }

// export default Wolf;