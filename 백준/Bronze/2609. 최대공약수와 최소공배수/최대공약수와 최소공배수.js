const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let num1 = input[0];
let num2 = input[1];

let gcds = function (x, y) {
  if (!y) {
    return x;
  }
  return gcds(y, x % y);
};

let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

let answer1 = gcds(num1, num2);
let answer2 = getLCM(num1, num2);

console.log(answer1);
console.log(answer2);
