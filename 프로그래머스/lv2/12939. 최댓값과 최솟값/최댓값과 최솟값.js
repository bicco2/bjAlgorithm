function solution(s) {
    var answer = '';
    let newArr = s.split(" ").map(i => Number(i));
    newArr.sort((a,b) => (a-b));
    answer += newArr[0] + ' ';
    answer += newArr[newArr.length - 1];
    return answer;
}