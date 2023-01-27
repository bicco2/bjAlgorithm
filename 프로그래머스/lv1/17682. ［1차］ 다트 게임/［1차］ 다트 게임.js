function solution(dartResult) {
    var answer = [];
    var score = 0;
    for(let i = 0; i<dartResult.length; i++){
        if(isNaN(dartResult[i]) === false){
            if(isNaN(dartResult[i+1]) === false){
                score = 10;
                i++;
            }
            else{
                score = dartResult[i];
            }
            
        }
        else if(dartResult[i] === "S"){
            answer.push(score * 1);
        }
        else if(dartResult[i] === "D"){
            answer.push(Math.pow(score,2));
        }
        else if(dartResult[i] === "T"){
            answer.push(Math.pow(score,3));
        }
        else if(dartResult[i] === "*"){
            answer[answer.length-1] *= 2;
            if (answer.length > 1){
                answer[answer.length-2] *= 2;                
            }
        }
        else if(dartResult[i] === "#"){
            answer[answer.length - 1] *= -1;
        }
    }
    console.log(answer);
    return answer.reduce((acc, cur) => acc+ cur, 0);
}