function person(name, age) {
  this.name = name;
  this.age = age;
}

function car(model, company) {
  this.model = model;
  this.company = company;
}

let mycar = new car("Toyota", "Camry");
// console.log(mycar)

let myfriend = new person("John", "15");
// console.log(myfriend)

function Tea(type) {
  this.type = type;

  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let newtea = new Tea("Lemon tea");

// console.log(newtea);
// console.log(newtea.describe());

function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  return `${this.name} make a sound`;
};

// check = new Animal("Dog")
// console.log(check)

let newAnimal = new Animal("Dog");
console.log(newAnimal.sound())