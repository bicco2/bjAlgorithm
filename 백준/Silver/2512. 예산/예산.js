const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const arr = input
  .shift()
  .split(' ')
  .map((item) => +item);

const price = +input[0];

let start = 1;
let end = Math.max(...arr);

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let curr of arr) {
    total += Math.min(curr, mid);
  }

  if (total <= price) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
