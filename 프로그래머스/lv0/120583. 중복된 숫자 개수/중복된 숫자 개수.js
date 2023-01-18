function solution(array, n) {
    var answer = 0;
    var newArr = array.filter(item => item === n);
    answer = newArr.length;
    return answer;
}