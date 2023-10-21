function solution(my_string, is_suffix) {
    var answer = 0;
    var index = is_suffix.length;
    if(index <= my_string.length){
        if(is_suffix == my_string.slice(-index)){
            return 1;
        }
        else {
            return 0;
        }
    }
    return 0;
}