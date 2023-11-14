function solution(start, end) {
    const answer = []
    while(start >= end){
        answer.push(start)
        start--
    }
    return answer
}