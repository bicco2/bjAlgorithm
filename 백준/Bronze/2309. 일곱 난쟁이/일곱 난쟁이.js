const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item)
  .sort((a, b) => b - a);

let sum = input.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
let gap = sum - 100;

let answer = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i] + input[j] === gap) {
      answer.push(input[i]);
      answer.push(input[j]);
      break;
    }
  }
  if (answer.length !== 0) {
    break;
  }
}

let a = input.filter((item) => item !== answer[0] && item !== answer[1]);

let b = a.sort((a, b) => a - b);

for (let item of b) {
  console.log(item);
}