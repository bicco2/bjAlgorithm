const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = [...new Array(n + 1)].map((v) => new Array(k + 1).fill(0));
const MOD = 1000000000;

for (let i = 0; i <= k; i++) {
  dp[1][i] = i;
}
for (let i = 0; i <= n; i++) {
  dp[i][1] = 1;
}
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= k; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
  }
}

console.log(dp[n][k]);