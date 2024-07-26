function solution(prices) {
    const result = new Array(prices.length).fill(0);
    const stack = [];
    
    const len = prices.length; 
    
    for(let i = 0; i < len; i++){
        while(stack && prices[stack.at(-1)] > prices[i]){
            let lastIdx = stack.pop();
            result[lastIdx] = i - lastIdx;
        }
        stack.push(i);
    }
    
    for(let idx of stack){
        result[idx] = len - idx - 1;
    }
    
    return result;
}