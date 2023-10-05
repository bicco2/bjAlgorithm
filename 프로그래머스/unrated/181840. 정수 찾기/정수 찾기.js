function solution(num_list, n) {
    var answer = 0;
    for(let item of num_list){
        if(item === n){
            answer = 1;
        }
    }
    return answer;
}