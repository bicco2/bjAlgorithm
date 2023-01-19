function solution(s) {
    // var regex = /^\d{6}$|^\d{4}$/;
    // if(s.length === 4 || s.length === 6){
    //     return /^[0-9]+$/.test(s);
    // }
    // return false;
         return /^\d{4}$|^\d{6}$/.test(s);

}