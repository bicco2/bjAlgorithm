function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((acc, cur, i, {length}) =>{
        return i === length - 1 ? (acc + cur) / length : acc + cur; 
    }, 0)
    return answer;
}
