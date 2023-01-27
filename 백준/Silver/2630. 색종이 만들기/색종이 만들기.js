const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const board = arr.map((string) => string.split(" ").map((i) => Number(i)));

var count_blue = 0;
var count_white = 0;

function solution(x, y, n) {
  var check_paper = 0;
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      check_paper += board[i][j];
    }
  }
  if (check_paper === 0) {
    count_white++;
  } else if (check_paper === n * n) {
    count_blue++;
  } else {
    solution(x, y, n / 2);
    solution(x + n / 2, y, n / 2);
    solution(x, y + n / 2, n / 2);
    solution(x + n / 2, y + n / 2, n / 2);
  }
}

solution(0, 0, n);

console.log(count_white);
console.log(count_blue);
