const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const totArr = [];

function recur(arr, sum) {
  if (arr.length == 2) {
    totArr.push(sum);
    return;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
    sum += arr[i - 1] * arr[i + 1];
    recur(newArr, sum);
    sum -= arr[i - 1] * arr[i + 1];
  }
}

recur(input, 0);
console.log(Math.max(...totArr));
