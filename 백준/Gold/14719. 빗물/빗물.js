const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const height = +input[0][0];
input = input[1].split(' ').map(Number);

let answer = 0;

for (let i = 1; i < input.length; i++) {
  let left = -1;
  let right = -1;
  let min = 0;
  let result = 0;

  for (let j = i; j >= 0; j--) {
    left = Math.max(left, input[j]);
  }

  for (let j = i; j < input.length; j++) {
    right = Math.max(right, input[j]);
  }

  min = Math.min(left, right);
  result += min - input[i];
  answer += result;
}

console.log(answer);