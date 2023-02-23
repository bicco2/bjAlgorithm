function solution(word) {
    var answer = [];
    var str = "";
    var wordList = ["A", "E", "I", "O", "U"];
    
    
    function dfs(str, length){
        
        if(str.length === length){
            answer.push(str);
            return;
        }
        
        for(let i = 0; i<wordList.length; i++){
            dfs(str+wordList[i], length);
        }
    }
    
    
    for(let i = 1; i <= 5; i++){
        dfs(str, i);
    }
    
    return answer.sort().indexOf(word) + 1;
}
