function solution(s) {
    var cut_zero = 0;
    var count = 0;
    s = s.split("");
    while(true){
        if([...s] == "1"){
            return [count, cut_zero]
            break;
        }
        else {
            // 변환 횟수 
            count++;
            // 0 제거
            var new_str = s.filter((item) => item != 0);
            // 0 제거 갯수 더하기
            cut_zero += s.length - new_str.length;
            var new_binary = new_str.length.toString(2);

            s = new_binary.split('');    
        }
        
    }
    
}