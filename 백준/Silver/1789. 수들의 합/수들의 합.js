const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const N = fs.readFileSync(filePath).toString().trim();

let sum = 0;
let answerArr = [];

let index = 1;
let check = true;

while (check) {
  sum += index;
  if (sum === N) {
    console.log(index);
    answerArr.push(index);
    console.log('=');
    break;
  }
  if (N - sum <= index) {
    sum -= answerArr.pop();
    answerArr.push(N - sum);
    break;
  }
  answerArr.push(index);
  index++;
}

console.log(index);
