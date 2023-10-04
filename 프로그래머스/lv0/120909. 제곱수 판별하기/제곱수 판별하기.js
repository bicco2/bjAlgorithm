function solution(n) {
    var answer = 0;
    answer = Math.sqrt(n); 
    if(answer % 1 == 0){
        return 1;
    }
    return 2;
}