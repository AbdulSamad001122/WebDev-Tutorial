let sum = 0;
let n;

function sumOfN(n) {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

let result = sumOfN(10);

console.log(result);
