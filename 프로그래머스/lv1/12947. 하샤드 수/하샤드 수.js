function solution(x) {
    var answer = true;
    var str = [...(x + "")];
    var sum = str.reduce((acc,cur) => acc + Number(cur), 0);
    if(x % sum !== 0) answer =false;
    return answer;
}