const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input.shift();
let m = +input.shift();

let arr = [...input.shift().split(" ")];

let max = 0;

for (let i = 1; i < m; i++) {
  max = Math.max(max, arr[i] - arr[i - 1]);
}

max = Math.max(parseInt((max + 1) / 2), arr[0] - 0, n - arr[arr.length - 1]);

console.log(max);
