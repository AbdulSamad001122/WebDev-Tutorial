class Bird {
  fly() {
    return "Flying....";
  }
}

class Penguin extends Bird {
  fly() {
    return "Penguins can't fly!";
  }
}

let my_bird = new Bird();
let my_Penguin = new Penguin();

console.log(my_bird.fly());
console.log(my_Penguin.fly());
