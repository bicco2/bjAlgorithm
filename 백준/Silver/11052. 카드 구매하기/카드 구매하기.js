const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

n = Number(n);
arr = [0, ...arr.map(Number)];

let dp = [...new Array(n + 1)].fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + arr[j]);
  }
}
console.log(dp[n]);
