const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const newArr = arr.map((item) => [...item.split(' ')]);

newArr.sort((a, b) => a[0] - b[0]);

let answer = '';

for (let item of newArr) {
  answer += item[0] + ' ' + item[1] + '\n';
}

console.log(answer);
