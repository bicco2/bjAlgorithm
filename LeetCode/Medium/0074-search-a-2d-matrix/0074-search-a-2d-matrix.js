/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    // 먼저 행 관련해서 이진 탐색 진행 
    let start = 0;
    let end = matrix.length - 1;

    let matrixNend = matrix[0].length - 1;

    function MbinarySearch(start, end){

        if(start > end) return false;
        let mid = Math.floor((start + end) / 2);

        if(matrix[mid][0] > target) return MbinarySearch(start, mid - 1);
        else if (matrix[mid][0] <= target &&  target <= matrix[mid][matrixNend]) return mid;
        else return MbinarySearch(mid + 1, end);
    }

    let fixM = +MbinarySearch(start, end);

    function NbinarySearch(start, end){
        if(start > end) return false;
        let mid = Math.floor((start + end) / 2);

        if(matrix[fixM][mid] === target) return true;
        else if (matrix[fixM][mid] > target) return NbinarySearch(start, mid - 1);
        else return NbinarySearch(mid + 1, end);
    }

    return NbinarySearch(start, matrixNend);

    
};