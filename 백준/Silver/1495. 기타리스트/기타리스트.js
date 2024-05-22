const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [option, arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, s, m] = option.split(' ').map(Number);

const vList = arr.split(' ').map(Number);

const dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(false));

dp[0][s] = true;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    if (dp[i - 1][j]) {
      if (j - vList[i - 1] <= m && j - vList[i - 1] >= 0) {
        dp[i][j - vList[i - 1]] = true;
      }
      if (j + vList[i - 1] <= m && j + vList[i - 1] >= 0) {
        dp[i][j + vList[i - 1]] = true;
      }
    } else {
      continue;
    }
  }
}

let answer = -1;

for (let i = m; i >= 0; i--) {
  if (dp[n][i]) {
    answer = i;
    console.log(answer);
    return;
  }
}

console.log(answer);
