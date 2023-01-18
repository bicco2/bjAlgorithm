function solution(n) {
    var answer = 0;
    var str = n.toString().split("");
    answer = str.reduce((acc, cur)=>{
       return acc += parseInt(cur);
    },0)
    return answer;
}