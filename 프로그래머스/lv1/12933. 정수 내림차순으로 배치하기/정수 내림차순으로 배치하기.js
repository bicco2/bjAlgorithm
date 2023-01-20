function solution(n) {
    var arr = [...(n.toString())]
    return +arr.sort((a,b) => b-a).reduce((acc, cur) => acc + cur, "" );
}


// function solution(n) {
//   const newN = n + "";
//   const newArr = newN
//     .split("")
//     .sort()
//     .reverse()
//     .join("");

//   return +newArr;
// }