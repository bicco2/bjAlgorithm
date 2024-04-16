const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let answer = [0, 1, 1];

for (let i = 2; i <= 20; i++) {
  answer.push(answer[i - 1] + answer[i]);
}

console.log(answer[input]);
