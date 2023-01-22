function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        var arr1Str = arr1[i].toString(2).padStart(n, "0");
        var arr2Str = arr2[i].toString(2).padStart(n, "0");
        
        arr1Str = [...arr1Str];
        
        arr1Str = arr1Str.map((item, index) =>
            (arr1Str[index] === "0" && arr2Str[index] === "0") ? " " : "#"
        )
        answer.push([...arr1Str].join(""));
    }


    return answer;
}