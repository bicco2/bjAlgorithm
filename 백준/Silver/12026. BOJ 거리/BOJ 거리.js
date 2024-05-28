const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const N = +n;
const block = arr[0].split('');

const dp = new Array(N).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  let currentIdx = i;
  let currentChar = block[i];
  if (currentChar === 'B') {
    for (let j = i + 1; j < N; j++) {
      let nextIdx = j;
      let nextChar = block[nextIdx];
      if (nextChar === 'O') {
        let jump = nextIdx - currentIdx;
        dp[nextIdx] = Math.min(dp[nextIdx], dp[currentIdx] + jump * jump);
      }
    }
  } else if (currentChar === 'O') {
    for (let j = i + 1; j < N; j++) {
      let nextIdx = j;
      let nextChar = block[nextIdx];
      if (nextChar === 'J') {
        let jump = nextIdx - currentIdx;
        dp[nextIdx] = Math.min(dp[nextIdx], dp[currentIdx] + jump * jump);
      }
    }
  } else {
    for (let j = i + 1; j < N; j++) {
      let nextIdx = j;
      let nextChar = block[nextIdx];
      if (nextChar === 'B') {
        let jump = nextIdx - currentIdx;
        dp[nextIdx] = Math.min(dp[nextIdx], dp[currentIdx] + jump * jump);
      }
    }
  }
}

if (dp[N - 1] !== Infinity) {
  console.log(dp[N - 1]);
} else {
  console.log(-1);
}
