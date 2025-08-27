class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(2, 2));

let my_calc = new Calculator();

console.log(my_calc.add(3 , 3))
