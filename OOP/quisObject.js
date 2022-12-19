class Animal {
    constructor (name = "", age = 0, isMammal = true) {
    this.name = name,
    this.age = age,
    this.isMammal = isMammal
    }
}

class Rabbit extends Animal {
    constructor (name = "", age = 0){
        super(name, age, true);
    }
    eat () {
    return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal {
    // akan tetap mewariskan constructor dari parent, tidak perlu ditulis
    fly () {
        return `${this.name} sedang terbang!`
    }
}

const myRabbit = new Rabbit ("Labi", 2);
const myEagle = new Eagle ("Elo", 4, false)
