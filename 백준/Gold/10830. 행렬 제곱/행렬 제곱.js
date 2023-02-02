const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const N = +input[0][0];
const B = +input[0][1];
const MRTX = input.splice(1).map((v) => v.map((x) => +x % 1000));

function makeNewMrtx(n, mtrx1, mtrx2) {
  let newMtrx = Array.from(Array(N), () => [...new Array(N)].map((i) => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let z = 0; z < n; z++) {
        newMtrx[i][j] += mtrx1[i][z] * mtrx2[z][j];
      }
      newMtrx[i][j] %= 1000;
    }
  }
  return newMtrx;
}

// 1629에서 half로 한 것과 달리 얘는 행렬을 뱉어야한다. 따라서 half를 다차원 배열로 바꿔서 풀면됨

function solution(n, b, mtrx) {
  if (b == 1) {
    return mtrx;
  } else if (b == 2) {
    return makeNewMrtx(n, mtrx, mtrx);
  } else {
    const half = solution(n, parseInt(b / 2), mtrx);

    if (b % 2 == 0) {
      return makeNewMrtx(n, half, half);
    }
    return makeNewMrtx(n, makeNewMrtx(n, half, half), mtrx);
  }
}

const result = solution(N, B, MRTX);

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}
