function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((item, idx) => {
        signs[idx] ? answer += item : answer -= item;
    })
    return answer;
}