// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type after conversion.
// If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

function whatAmI(input) {
  if (typeof input == "number") {
    return "I'm a number!";
  }

  if (typeof input == "string") {
    return "I'm a string!";
  }

  else {
    return "Unknown type";
  }

}

console.log(whatAmI(7));
console.log(whatAmI("hello"));
