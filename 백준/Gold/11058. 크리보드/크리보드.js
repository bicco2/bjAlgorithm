const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = +input;

const dp = Array.from(Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i > 6) {
    for (let j = 2; j < 5; j++) {
      dp[i] = Math.max(dp[i], dp[i - (j + 1)] * j);
    }
  }
}

console.log(dp[n]);
