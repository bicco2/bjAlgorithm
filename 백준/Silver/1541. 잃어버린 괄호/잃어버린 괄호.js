const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim();

const minusArr = input.split('-'); // [ '5+7', '9+2+4', '5+2', '2' ]

let answerArr = [];

for (let mItem of minusArr) {
  let eachPlusSum = 0;
  let plusArr = mItem.split('+');

  for (let pItem of plusArr) {
    eachPlusSum += +pItem;
  }
  answerArr.push(eachPlusSum); // [ 12, 15, 7, 2 ]
}

const result = answerArr.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
);

console.log(result);
