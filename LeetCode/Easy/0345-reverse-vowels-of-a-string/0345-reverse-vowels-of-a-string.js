/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let start = 0;
    let end = s.length - 1;

    let chars = s.split('');


    while(start < end ){
        if(isVowel(chars[start]) && isVowel(chars[end])){
            let temp = chars[start];
            chars[start] = chars[end];
            chars[end] = temp;
            start++;  
            end--;
        }
        else{
            if(!isVowel(chars[start])){
                start++;
            }
            if(!isVowel(chars[end])){
                end--;
            }
        }
    }

    return chars.join("");

};


function isVowel(char) {
    // 입력된 문자가 'a', 'e', 'i', 'o', 'u' 중 하나인지 확인
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}