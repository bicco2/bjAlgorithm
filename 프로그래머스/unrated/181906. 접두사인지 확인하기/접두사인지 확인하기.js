function solution(my_string, is_prefix) {
    var answer = 0;
    var num = is_prefix.length;
    var checkWord = my_string.slice(0,num);
    
    if(is_prefix == checkWord){
        answer = 1;
    }
    return answer;
}