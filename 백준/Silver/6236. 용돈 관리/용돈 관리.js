const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.split(" ").map((v) => +v);
arr = arr.map((v) => +v);

let k = 0;

let start = Math.max(...arr);
let end = arr.reduce((acc, cur) => acc + cur, 0);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let currentMoney = mid;
  let count = 1;
  for (let price of arr) {
    if (currentMoney - price < 0) {
      currentMoney = mid;
      count += 1;
    }
    currentMoney -= price;
  }

  if (count > +m || mid < Math.max(...arr)) {
    start = mid + 1;
  } else {
    end = mid - 1;
    k = mid;
  }
}

console.log(k);
