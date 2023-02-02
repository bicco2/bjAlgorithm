function solution(X, Y) {
    var answer = [];
    var xArr = [...X];
    var yArr = [...Y];

    var xNum = [...Array(10)].fill(0);
    var yNum = [...Array(10)].fill(0);
    
    for(let i = 0; i < xArr.length; i++){
        xNum[xArr[i]] += 1;
    }
    
    for(let i = 0; i < yArr.length; i++){
        yNum[yArr[i]] += 1;
    }
    
    for(let i = 0; i < xNum.length; i++){
        let len = Math.min(xNum[i], yNum[i]);
        for(let j = 0; j < len; j++){
            answer.push(i);
        }
    }
    
    let result = answer.sort().reverse().join('');
    
    if(answer.length === 0){
        return "-1";
    }
    
    return +result ? result : "0"
}