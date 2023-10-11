function solution(arr, delete_list) {
    var answer = [];
    var check = true;
    for(let item of arr){
        for(let dItem of delete_list){
            if(item == dItem){
                check = false;
            }
        }
        if(check){
            answer.push(item);
        }
        check = true;
    }
    return answer;
}