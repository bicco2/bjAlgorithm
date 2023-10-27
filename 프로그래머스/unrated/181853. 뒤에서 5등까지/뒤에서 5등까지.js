function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a,b)=> a-b).filter((item,idx)=> idx < 5);
    return answer;
}