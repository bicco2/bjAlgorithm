function solution(a, b) {
    var num1 = a.toString() + b;
    var num2 = b + a.toString();
    if(num1 >= num2){
        return Number(num1);
    }
    else {
        return Number(num2);
    }
}