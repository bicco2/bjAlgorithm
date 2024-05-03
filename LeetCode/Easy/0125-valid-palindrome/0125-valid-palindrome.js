/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let pureString = replaceNonAlphabetic(s).split(" ").join("");
    let len = pureString.length;
    for(let i= 0, j = len - 1; i < len, j >= 0; i++, j--){
        if(pureString[i] !== pureString[j]){
            return false; 
        }
    }
    return true;
    
};


function replaceNonAlphabetic(inputString) {
    let lowercaseString = inputString.toLowerCase();
    return lowercaseString.replace(/[^a-z0-9]/g, '');
}