const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...stair] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
stair = stair.map(Number);

const dp = new Array(n).fill(0);

dp[0] = stair[0];
dp[1] = stair[0] + stair[1];
dp[2] = Math.max(stair[0], stair[1]) + stair[2];

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i]);
}

console.log(dp[n - 1]);
