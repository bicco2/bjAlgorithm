function solution(num_list) {
    let sum = num_list[0];
    let multi = num_list[0];
    for(let item = 1; item < num_list.length; item++){
        sum += num_list[item];
        multi *= num_list[item];
    }
    
    sum = Math.pow(sum, 2);
    
    if(sum > multi){
        return 1;
    }
    return 0;
    
}