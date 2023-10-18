function solution(num_list) {
    var answer = -1;
    for(let idx = 0; idx < num_list.length; idx++){
        if(num_list[idx] < 0){
            answer = idx;
            break;
        }
    }
    return answer;
}