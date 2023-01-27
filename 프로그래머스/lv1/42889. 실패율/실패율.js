function solution(N, stages) {
    var answer = [];
    var stage_enter_num = stages.length; 
    var result = [];
    for(let i = 1; i <= N; i++){ // 스테이지별 실패율 구하기 위한 포문
        let not_clear = stages.filter((item) => item === i).length; // 각 스테이지별 도달했지만 클리어 못한사람 수
        answer.push([i, not_clear / stage_enter_num]);
        stage_enter_num -= not_clear;
    }
    answer.sort((a,b) => b[1] - a[1] || a[0] - b[0]);
    answer.forEach((item) => result.push(item[0]));
    return result;
}