// Task 3: Find Maximum in an Array

// Write a function findMax(arr) that returns the largest number in the array

arr = [1, 5, 76, 9, 30, 21];

function findMax(array) {
  return Math.max(...array);
}

maxNum = findMax(arr);
console.log(maxNum);
