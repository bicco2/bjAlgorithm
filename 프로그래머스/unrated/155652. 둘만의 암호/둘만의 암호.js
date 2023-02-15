function solution(s, skip, index) {
    var answer = '';
    s = [...s];
    skip = [...skip];
    
    for(let i = 0; i < s.length; i++){
        let asc = s[i].charCodeAt();
        for(let j = 1; j <= index; j++){
            asc += 1;
            if(asc === 123){
                asc = 97;
            }
            for(let z = 0; z < skip.length; z++){
                if(asc === skip[z].charCodeAt()){
                    j--;
                    break;
                }
            }
            
        }
        answer += String.fromCharCode(asc);
    }
    
    return answer;
}