function solution(my_string) {
    var answer = [];
    var word = "";
    for(let item of my_string){

        if(item === " "){
            answer.push(word);
            word = "";
            continue;
        }
        word += item;
    }
    if(word !== ""){
        answer.push(word);
    }
    return answer;
}