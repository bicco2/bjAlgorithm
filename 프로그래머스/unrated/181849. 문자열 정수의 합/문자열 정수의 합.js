function solution(num_str) {
    var answer = 0;
    for(let item of num_str){
        answer += +item ;
    }
    return answer;
}