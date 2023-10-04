function solution(n) {
    var answer = [];
    for(let item = 1; item <= n; item++) {
        if(item % 2 !== 0){
            answer.push(item);
        }
    }
    return answer;
}