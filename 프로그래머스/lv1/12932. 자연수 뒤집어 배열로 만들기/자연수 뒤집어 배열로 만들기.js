function solution(n) {
    var str = n.toString();
    var arr = [...str].reverse().map(item => item = Number(item));
    console.log(arr);
    return arr;
}