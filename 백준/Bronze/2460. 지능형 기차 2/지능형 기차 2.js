const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let current = 0;
let max = 0;

for (let item of input) {
  item = item.split(' ');
  let comeOut = +item[0];
  let comeIn = +item[1];

  current -= comeOut;
  current += comeIn;

  max = Math.max(max, current);
}
console.log(max);