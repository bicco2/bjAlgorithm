function solution(array, height) {
    var answer = 0;
    const newArr = array.filter(item => item > height);
    answer = newArr.length;
    return answer;
}