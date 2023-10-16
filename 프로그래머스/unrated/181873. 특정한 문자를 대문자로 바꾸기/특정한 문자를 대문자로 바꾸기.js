function solution(my_string, alp) {
    var result = "";
    for (var i = 0; i < my_string.length; i++) {
      if (my_string[i] === alp) {
        result += alp.toUpperCase();
      } else {
        result += my_string[i];
      }
    }
    return result ;
}