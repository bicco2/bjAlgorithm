function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        for(let item of num_list){
            answer += item;
        }
           return answer;
    }
    else {
        answer = 1;
        for(let item of num_list){
            answer *= item;
        }
        return answer;
    }
    
}