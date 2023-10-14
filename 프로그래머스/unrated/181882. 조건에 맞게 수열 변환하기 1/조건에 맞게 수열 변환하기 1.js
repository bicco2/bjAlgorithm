function solution(arr) {
    var answer = arr.map((item) =>{
        if (item % 2== 0 && item >= 50){
            return item / 2;
        }
        else if (item % 2 !== 0 && item < 50){
            return item *2;
        }
        else 
            return item
        
    })
    return answer;
}