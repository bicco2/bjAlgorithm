function solution(n) {
    var answer = '';
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            // 박
            answer += "박"
        }
        else // 수
            answer += "수"
    }
    return answer;
}