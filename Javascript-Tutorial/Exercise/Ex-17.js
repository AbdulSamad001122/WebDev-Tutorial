let n;
let solve;
let array = [];

function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    solve = `${n} * ${i} = ${n * i}`;
    array.push(solve);
  }
  return array;
}

console.log(printMultiplicationTable(2));
