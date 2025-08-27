class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }

  multipy() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

my_calculator = new Calculator (5 , 6)

console.log(my_calculator.add())
console.log(my_calculator.sub())
console.log(my_calculator.multipy())
console.log(my_calculator.divide())


