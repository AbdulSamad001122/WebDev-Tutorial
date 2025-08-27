// Task 5: Flatten a Nested Array

// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

let nestedArray = [1, [2, 3], [4, [5]]];

function flattenArray(array) {
  return array.flat(Infinity);
}

let flat_Array = flattenArray(nestedArray);
console.log(flat_Array);  
