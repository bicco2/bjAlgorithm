function solution(num_list, n) {
    var answer = num_list.filter((item,idx) => idx < n);
    return answer;
}