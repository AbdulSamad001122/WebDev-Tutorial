class Coffee_machine {
  start() {
    return "Starting the machine....";
  }

  brew_coffee() {
    return "Brewing the coffee....";
  }

  press_start_button() {
    let massage_1 = this.start();
    let massage_2 = this.brew_coffee();

    return `${massage_1} / ${massage_2}`;
  }
}

let my_machine = new Coffee_machine();

// console.log(my_machine.start());
// console.log(my_machine.brew_coffee());

console.log(my_machine.press_start_button())