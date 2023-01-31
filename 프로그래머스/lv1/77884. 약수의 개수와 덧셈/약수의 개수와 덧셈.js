function solution(left, right) {
    var answer = 0;
    
    function getDivisors(num){
        let divisors = 0;
        for(let i = 1 ; i <= Math.sqrt(num) ; i++){
            if(num % i === 0) {
                divisors++;
                if(num / i != i) divisors++;
            }
        }
    
    // divisors.sort((a, b) => a - b);
        return divisors;
    }
    
    for(let i = left; i <= right; i++){
        let value = getDivisors(i);
        if(value % 2 === 0){
            answer += i;
        }
        else {
            answer -= i;
        }
           
    }
    return answer;
}
