function solution(arr, k) {
    var answer = [];
    if(k % 2 == 0){
            return arr.map((item) => item + k);

    }
     return arr.map((item) => item * k);

}