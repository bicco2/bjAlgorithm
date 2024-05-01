/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    let start = 0;
    let end = Math.max(...piles);

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let cnt = 0;

        for(let x of piles){
            cnt += Math.ceil(x / mid);
        }

        if(cnt <= h) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return start;


};
