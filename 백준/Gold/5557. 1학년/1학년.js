const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const N = +n;
const numbers = arr.map((item) => +item);

const dp = Array.from(Array(N), () => Array(21).fill(BigInt(0)));

dp[0][numbers[0]] = BigInt(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 21; j++) {
    if (j + numbers[i] <= 20) dp[i][j + numbers[i]] += dp[i - 1][j];
    if (j - numbers[i] >= 0) dp[i][j - numbers[i]] += dp[i - 1][j];
  }
}

console.log(dp[N - 2][numbers[N - 1]].toString());
