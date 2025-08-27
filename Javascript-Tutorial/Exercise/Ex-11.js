// Task 1: Array Filtering

// Write a function filterNumbers(arr) that returns only numbers from a mixed array

let arr = [1, "hello", true, 42, null, "5", 100];

function filterNumbers(array) {
  return array.filter(item => typeof item === "number");
}

let filterArr = filterNumbers(arr);
console.log(filterArr);  
