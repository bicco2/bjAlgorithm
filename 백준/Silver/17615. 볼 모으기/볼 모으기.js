const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 일단 시작점과 끝점에 있는 공의 연속된 색깔과 숫자를 구함
// 2. 그 공을 제외하고 남은 공의 갯수를 카운트
// 3. 똑같이 끝점에서 있는 공의 연속된 색깔과 숫자를 구함
// 4. 똑같이 카운트
// 5. 둘이 비교해서 작은 것 리턴

let total = input[0];
let ballArr = [...input[1]];
let redBall = 0;
let blueBall = 0;

let start_ball = ballArr[0];
let end_ball = ballArr[total - 1];

ballArr.forEach((item) => {
  item === "R" ? redBall++ : blueBall++;
});
let answer = [Math.min(redBall, blueBall)];

let redBall2 = redBall;
let blueBall2 = blueBall;

//시작점에서 체크
for (let i = 0; i < total; i++) {
  if (ballArr[i] === start_ball && start_ball === "R") {
    redBall -= 1;
  }
  if (ballArr[i] === start_ball && start_ball === "B") {
    blueBall -= 1;
  }
  if (ballArr[i] !== start_ball) {
    answer.push(Math.min(redBall, blueBall));
    break;
  }
}

//끝점에서 체크
for (let i = total - 1; i >= 0; i--) {
  if (ballArr[i] === end_ball && end_ball === "R") {
    redBall2 -= 1;
  }
  if (ballArr[i] === end_ball && end_ball === "B") {
    blueBall2 -= 1;
  }
  if (ballArr[i] !== end_ball) {
    answer.push(Math.min(redBall2, blueBall2));
    break;
  }
}

console.log(Math.min(...answer));
