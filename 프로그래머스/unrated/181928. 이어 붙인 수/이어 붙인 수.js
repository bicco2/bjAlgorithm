function solution(num_list) {
    var oddNum = "";
    var evenNum = "";
    for(let item of num_list){
        if(item % 2 == 0){
            evenNum += item;
        }
        else if (item % 2 !== 0){
            oddNum += item;    
        }
        
    }
    return Number(evenNum) + Number(oddNum);
}