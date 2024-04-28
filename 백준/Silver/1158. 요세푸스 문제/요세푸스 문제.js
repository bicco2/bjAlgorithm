let input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let ans = [];
const [N, K] = input;
const arr = Array.from({ length: N }, (_, index) => index + 1);
let count = K - 1;
while (arr.length !== 0) {
  ans.push(...arr.splice(count, 1));
  count += K - 1;
  if (count >= arr.length) count %= arr.length;
}
console.log(`<${ans.join(', ')}>`);