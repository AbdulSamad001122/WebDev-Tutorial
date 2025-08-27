// Task 4: Remove Duplicates from an Array

// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(array) {
  return [...new Set(array)];
}

filterArray = removeDuplicates(arrayWithDuplicates);
console.log(filterArray);
