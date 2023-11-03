function solution(n, k) {
    var answer = [];
    var sumK = k;
    while(sumK <= n){
        answer.push(sumK);
        sumK += k;
    }
    return answer;
}