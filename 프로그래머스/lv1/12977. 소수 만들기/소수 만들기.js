function solution(nums) {
    var answer = 0;
    var len = nums.length;
    for(let i = 0; i < len - 2; i++){
        for(let j = i+1; j < len - 1; j++){
            for(let k = j+1; k < len; k++){
                var sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) {
                    answer += 1
                }
            }
        }
    }
    
    return answer;
}

function isPrime(sum) {
    for(let i = 2; i < sum; i++)
    if(sum % i === 0) return false;
    return sum > 1;
}