/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let start = 0; 
    let end = nums.length - 1;

    function binarySearch(start, end, target){
        if(start > end) return -1;
        let mid = Math.floor((end + start) / 2);

        if(nums[mid] === target) return mid;

        else if(nums[mid] > target) return binarySearch(start, mid - 1, target);

        else return binarySearch(mid+1, end, target);
    }
    

    return binarySearch(start, end, target);

};