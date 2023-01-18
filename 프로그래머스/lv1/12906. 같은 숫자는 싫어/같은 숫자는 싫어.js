function solution(arr)
{
    var answer = [];
    

    
    answer = arr.filter((item, index, source) => item !== source[index-1]);


    return answer;
}