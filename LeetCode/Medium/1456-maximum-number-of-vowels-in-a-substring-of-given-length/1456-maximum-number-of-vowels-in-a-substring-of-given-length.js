/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let cntVowels = 0;
    let maxCnt = 0;

    for(let i = 0; i < k; i++){
        if(isVowel(s[i])){
            cntVowels++;
            maxCnt++;
        }
    }

    for(let end = k, start = 1; end < s.length; start++, end++){
        if(cntVowels === k){
            return k;
        }
        if(isVowel(s[start - 1])){
            cntVowels--;
        }
        if(isVowel(s[end])){
            cntVowels++;
        }

        maxCnt = Math.max(maxCnt, cntVowels);
    }

    return maxCnt;


};

function isVowel(char) {
    // 입력된 문자가 'a', 'e', 'i', 'o', 'u' 중 하나인지 확인
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}