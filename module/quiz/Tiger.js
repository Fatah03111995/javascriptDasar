//1. commonJS
class Tiger {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
  
    growl() {
      return 'grrrrrrr';
    }
  }
  
  module.exports = Tiger;

//2. module
// class Tiger {
//     constructor() {
//       this.strength = Math.floor(Math.random() * 100);
//     }
  
//     growl() {
//       return 'grrrrrrr';
//     }
//   }

//   export default Tiger;