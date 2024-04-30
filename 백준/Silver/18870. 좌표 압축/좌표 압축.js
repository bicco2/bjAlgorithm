const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(/\s/);

let N = +input.shift();
input = input.map((item) => +item);

let set = new Set(input);

let setToArr = [...set];

setToArr.sort((a, b) => a - b);

let map = new Map();

for (let i = 0; i < setToArr.length; i++) {
  map.set(setToArr[i], i);
}

let answer = '';

for (let item of input) {
  answer += map.get(item) + ' ';
}

console.log(answer);
