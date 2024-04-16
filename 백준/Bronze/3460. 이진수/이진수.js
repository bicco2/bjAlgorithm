const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [n, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

let answerArr = [];

for (let i = 0; i < n; i++) {
  answerArr.push(countBits(arr[i]));
}

for (let item of answerArr) {
  console.log(...item);
}

function countBits(num) {
  let count = 0;
  let answer = [];
  // 이과정에서 해당 숫자의 2진수에 1이 몇번 사용됐는지 구하는 것
  while (num > 0) {
    // 가장 오른쪽 비트가 1이면 count에 추가
    if (num & 1) {
      answer.push(count);
    }
    // 2로 나누는 것과 같음 가장 오른쪽 비트를 밀어냄
    num >>= 1;
    count++;
  }
  return answer;
}
