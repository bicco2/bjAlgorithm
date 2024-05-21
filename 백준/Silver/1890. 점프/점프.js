const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .map((x) => +x);

const board = Array.from(Array(n), () => new Array(n).fill(0));
const dp = Array.from(Array(n), () => new Array(n).fill(BigInt(0)));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    board[i][j] = arr.shift();
  }
}

dp[0][0] = 1;

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    let jump = board[x][y];
    if (jump === 0) continue;
    if (x + jump < n) {
      dp[x + jump][y] += BigInt(dp[x][y]);
    }
    if (y + jump < n) {
      dp[x][y + jump] += BigInt(dp[x][y]);
    }
  }
}

console.log(dp[n - 1][n - 1].toString());
