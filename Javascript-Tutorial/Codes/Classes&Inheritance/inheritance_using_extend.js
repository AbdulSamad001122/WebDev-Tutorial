class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return `${this.name} make a sound!`;
  }
}

class Parrot extends Animal {
  minato_sound() {
    return `${this.name} says chuchu`;
  }
}

const My_Parrot = new Parrot("Minato");

console.log(My_Parrot.sound());
console.log(My_Parrot.minato_sound());
