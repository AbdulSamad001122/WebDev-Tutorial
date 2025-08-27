// challenge - 1

// let count = 5;
// let countdown = [];

// while (count != 0) {
//   console.log(count);
//   countdown.push(count);
//   count = count - 1;
// }

// console.log(countdown);

// challenge - 2

let teaNames = [];
let userInput;

do {  userInput = prompt("Enter your favourite tea name : ");

  userInput = userInput.charAt(0).toUpperCase + userInput.slice(1).toLowerCase;

  if (userInput != "Stop") {
    teaNames.push(userInput);
  }
} while (userInput != "Stop");
