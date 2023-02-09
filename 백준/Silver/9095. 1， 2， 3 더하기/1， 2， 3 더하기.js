const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

n = Number(n);
arr = arr.map(Number);

const dp = new Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < n; i++) {
  console.log(dp[arr[i]]);
}
