function solution(n) {
    var answer = 0;
    for(let i = 2; i < parseInt(n/2); i++){
        if(n % i === 1){
            return i;
        }
    }
    return n-1;
}