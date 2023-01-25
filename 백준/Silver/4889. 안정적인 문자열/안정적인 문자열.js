const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];

for (let i = 0; i < input.length; i++) {
  let stack = [];
  let count = 0;
  if (input[i].includes("-")) {
    break;
  }
  for (let j = 0; j < input[i].length; j++) {
    if (stack.length === 0 && input[i][j] === "}") {
      count += 1;
      stack.push("{");
    } else if (stack.length !== 0 && input[i][j] === "}") {
      stack.pop();
    } else {
      stack.push(input[i][j]);
    }
  }
  count += parseInt(stack.length / 2);
  answer.push(count);
}

for (let i = 1; i <= answer.length; i++) {
  console.log(`${i}. ${answer[i - 1]}`);
}
