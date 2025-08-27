// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or
// "It's falsey!" if it's falsey.

// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!"
// if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}

console.log(isItTruthy(0)); // It's falsey!
console.log(isItTruthy(false)); // It's falsey!
console.log(isItTruthy("hello")); // It's truthy!
console.log(isItTruthy(null)); // It's falsey!
console.log(isItTruthy([])); // It's truthy!
