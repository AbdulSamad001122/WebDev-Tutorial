const person = {
  name: "Abdul Samad",

  greet() {
    console.log(`Hello! my name is ${this.name}`);
  },
};

person.greet();

let another_greet = person.greet;

another_greet();

let another_more_greet = person.greet.bind({ name: "Hitesh" });

another_more_greet();

let another_1_more_greet = person.greet.bind(person);

another_1_more_greet();
