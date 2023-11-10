function solution(myString, pat) {
    if(myString.length >= pat.length){
        var word1 = myString.toLowerCase();
        var word2 = pat.toLowerCase();
        if(word1.includes(word2)){
            return 1;
        }
        else {
            return 0;
        }
        
    }
    else 
        return 0;
}