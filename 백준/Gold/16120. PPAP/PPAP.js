const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let word = [...input];
let stack = [];

if (input === "PPAP" && input === "P") {
  console.log("PPAP");
} else {
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
    let sliceArr = stack.slice(-4).join("");

    if (sliceArr === "PPAP") {
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }

  if (stack.toString() === "P") {
    console.log("PPAP");
  } else {
    console.log("NP");
  }
}
