const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s/);

let board = [];

for (let i = 0; i < arr.length; i++) {
  let subArray = arr[i].split('');
  board.push(subArray);
}

function swap(i, j, k) {
  const coord = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const here = board[i][j];
  if (
    board[i + coord[k][0]] &&
    board[i + coord[k][0]][j + coord[k][1]] &&
    here !== board[i + coord[k][0]][j + coord[k][1]]
  ) {
    board[i][j] = board[i + coord[k][0]][j + coord[k][1]];
    board[i + coord[k][0]][j + coord[k][1]] = here;
    return true;
  } else return false;
}

function search() {
  for (let l = 0; l < 2; l++) {
    for (let x = 0; x < n; x++) {
      let count = 0;
      let color = curboard(x, 0, l);
      for (let y = 0; y < n; y++) {
        if (curboard(x, y, l) === color) {
          count++;
          if (count > maxCount) {
            maxCount = count;
          }
        } else {
          color = curboard(x, y, l);
          count = 1;
        }
      }
    }
  }
}

function curboard(x, y, l) {
  if (l === 0) return board[x][y];
  else return board[y][x];
}

let maxCount = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < 4; k++) {
      if (swap(i, j, k)) {
        search();
        swap(i, j, k);
      }
    }
  }
}

console.log(maxCount);
