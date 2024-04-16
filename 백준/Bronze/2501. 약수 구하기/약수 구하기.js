const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((item) => Number(item));

const N = input[0];
const K = input[1];

let cnt = 0;

let answer = 0;

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    cnt++;
  }
  if (cnt === K) {
    answer = i;
    break;
  }
}

if (cnt < K) {
  console.log(0);
} else {
  console.log(answer);
}
