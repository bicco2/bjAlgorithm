const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const newSet = new Set(arr);

const newArr = [...newSet];

newArr.sort((a, b) => {
  if (a.length === b.length) {
    if (a === b) return 0;
    return b > a ? -1 : 1;
  }
  return a.length - b.length;
});

for (let item of newArr) {
  console.log(item);
}
