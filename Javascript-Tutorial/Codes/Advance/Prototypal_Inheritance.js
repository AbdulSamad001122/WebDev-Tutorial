function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  console.log(`Hello! My name is ${this.name}`);
};

let my_name = new person("Abdul Samad");

my_name.greet();
