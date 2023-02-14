function solution(brown, yellow) {
    let total = brown + yellow;
    
    for(let i = 3; i <= total / 3; i++){
        if(total % i === 0){
            let j = total / i;
        
        
            if((i - 2) * (j - 2) === yellow){
                return [j,i];
            }
        }
    }
}