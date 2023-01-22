function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b)=> a-b);
    for(let i = 0; i < d.length; i++){
        budget = budget - d[i];
        if(budget < 0){
            answer = i;
            break;
        }
        else {
            answer = i + 1;
        }
    }
    return answer;
}