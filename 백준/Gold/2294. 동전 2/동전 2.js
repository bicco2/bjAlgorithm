const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

let dp = Array(m + 1).fill(Number.MAX_SAFE_INTEGER);
dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = coins[i]; j <= m; j++) {
    dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
  }
}

console.log(dp[m] === Number.MAX_SAFE_INTEGER ? -1 : dp[m]);
