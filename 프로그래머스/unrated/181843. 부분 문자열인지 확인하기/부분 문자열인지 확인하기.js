function solution(my_string, target) {
    var answer = my_string.indexOf(target);
    
    console.log(answer);
    
    if(answer == -1){
        return 0;
    }
    return 1;
}