const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let N = input[0];
let X = input[1];

var burger = [...new Array(51)].map((_) => 1);
var patty = [...new Array(51)].map((_) => 1);

let answer = 0;

for (let i = 1; i <= N; i++) {
  burger[i] = 3 + burger[i - 1] * 2;
  patty[i] = patty[i - 1] * 2 + 1;
}

function HowMuchPatty(level, eat) {
  if (eat === 0) {
    console.log(answer);
    return;
  } else if (level === 0) {
    answer++;
    console.log(answer);
    return;
  }
  eat--;
  if (eat == burger[level - 1]) {
    answer += patty[level - 1];
    eat -= burger[level - 1];
    HowMuchPatty(level - 1, eat);
  } else if (eat < burger[level - 1]) {
    HowMuchPatty(level - 1, eat);
  } else if (eat > burger[level - 1]) {
    answer += patty[level - 1] + 1;
    eat -= burger[level - 1] + 1;
    HowMuchPatty(level - 1, eat);
  }
}

HowMuchPatty(N, X);
