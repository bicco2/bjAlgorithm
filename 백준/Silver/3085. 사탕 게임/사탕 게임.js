const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let board = [];

let max = 1;

for (let i = 0; i < arr.length; i++) {
  let s = arr[i].split('');
  board.push(s);
}

for (let x = 0; x < n; x++) {
  if (max === n) break;
  for (let y = 0; y < n; y++) {
    if (max === n) break;
    for (let i = 0; i < 4; i++) {
      if (max === n) break;
      let X = x + dx[i];
      let Y = y + dy[i];

      if (X >= 0 && X < n && Y >= 0 && Y < n) {
        swap(x, y, X, Y);
        search(x, y, X, Y);
        swap(X, Y, x, y);
      }
    }
  }
}

console.log(max);

function swap(x, y, X, Y) {
  let temp = board[x][y];
  board[x][y] = board[X][Y];
  board[X][Y] = temp;
}

function search(x, y, X, Y) {
  let cnt = 1;
  for (let i = 1; i < n; i++) {
    if (board[x][i - 1] === board[x][i]) {
      cnt++;
      max = Math.max(cnt, max);
    } else {
      cnt = 1;
    }
  }
  cnt = 1;
  for (let i = 1; i < n; i++) {
    if (board[X][i - 1] === board[X][i]) {
      cnt++;
      max = Math.max(cnt, max);
    } else {
      cnt = 1;
    }
  }
  cnt = 1;
  for (let i = 1; i < n; i++) {
    if (board[i - 1][y] === board[i][y]) {
      cnt++;
      max = Math.max(cnt, max);
    } else {
      cnt = 1;
    }
  }
  cnt = 1;
  for (let i = 1; i < n; i++) {
    if (board[i - 1][Y] === board[i][Y]) {
      cnt++;
      max = Math.max(cnt, max);
    } else {
      cnt = 1;
    }
  }
}
