const solution = (M, waitlist) => {
  waitlist.sort((a, b) => b - a);
  let result = waitlist[0] * M;
  let [start, end] = [0, result];
  let mid;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    const sum = waitlist.reduce((prev, cur) => prev + Math.floor(mid / cur), 0);

    if (mid === end) {
      break;
    }
    if (sum < M) {
      start = mid + 1;
    } else {
      result = mid;
      end = mid;
    }
  }

  console.log(result);
};

const read = () => {
  let input = require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\n");
  const [NM, ...waitlist] = input;
  const M = Number.parseInt(NM.split(" ").pop(), 10);

  solution(
    M,
    waitlist.map((x) => Number.parseInt(x, 10))
  );
};

read();
