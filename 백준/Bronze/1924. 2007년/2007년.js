const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [x, y] = fs.readFileSync(filePath).toString().trim().split(" ");

const weekToDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const leapYearMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let day = +y;
for (let i = 0; i < x - 1; ++i) {
  day += leapYearMonths[i];
}

console.log(weekToDay[day % 7]);
