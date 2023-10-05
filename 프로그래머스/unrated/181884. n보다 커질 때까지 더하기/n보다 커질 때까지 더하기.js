function solution(numbers, n) {
    var sum = 0;
    for(let item of numbers){
        if(sum <= n){
            sum += item;
        }
        else   {
            return sum;
        }
    
    }
    return sum;
}