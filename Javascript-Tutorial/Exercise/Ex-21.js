let numbers_array = [2, 5, 8, 10, -3, -9, -1, 66, 9];

const sumPositiveNumbers = (arr) =>
  arr
    .filter((each_number) => each_number > 0)
    .reduce((total, each_number) => total + each_number, 0);

console.log(sumPositiveNumbers(numbers_array));
