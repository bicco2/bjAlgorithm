function solution(rny_string) {
    var answer = '';
    for(let item of rny_string){
        if(item === "m"){
            answer += "rn"
        }
        else {
            answer += item;
        }
    }
    return answer;
}