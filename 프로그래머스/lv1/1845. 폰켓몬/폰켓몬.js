function solution(nums) {
    var answer = 0;
    var set = new Set(nums);
    if (parseInt(nums.length / 2) <= set.size){
        answer = parseInt(nums.length / 2);
    }
    else { 
        answer = set.size;
    }
    return answer;
}