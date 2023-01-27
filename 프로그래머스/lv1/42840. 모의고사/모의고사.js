function solution(answers) {
    var answer = [0,0,0];
    var person1 = [1,2,3,4,5];
    var person2 = [2,1,2,3,2,4,2,5];
    var person3 = [3,3,1,1,2,2,4,4,5,5];
    
    for(let i = 0; i< answers.length; i++){
        if(person1[i%5] === answers[i]){
            answer[0] += 1;
        }
        if(person2[i%8] === answers[i]){
            answer[1] += 1;
        }
        if(person3[i%10] === answers[i]){
            answer[2] += 1;
        }
    }
    
    var maxValue = Math.max(...answer);
    
    var result = [];
    
    for(let i = 0; i < 3; i++){
        answer[i] === maxValue ? result.push(i+1) : 0
    }
    
    return result;
}