const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, m] = fs.readFileSync(filePath).toString().trim().split(' ');

const array = [];

function dfs() {
  if (array.length === +m) {
    console.log(array.join(' '));
  }

  for (let i = 1; i <= n; i++) {
    if (!array.includes(i)) {
      array.push(i);
      dfs();
      array.pop();
    }
  }
}

dfs();
