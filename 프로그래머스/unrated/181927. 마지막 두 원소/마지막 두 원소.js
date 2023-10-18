function solution(num_list) {

    let lastIdx = num_list.length - 1;
    let lastNode = num_list[lastIdx];
    let subLastNode = num_list[lastIdx - 1];
    if(lastNode > subLastNode){
        num_list.push(lastNode - subLastNode);
    }
    else {
        num_list.push(lastNode * 2);
    }
    return num_list;
}