function solution(arr1, arr2) {
    let arr1sum = 0;
    let arr2sum = 0;
    
    if(arr1.length > arr2.length){
        return 1;
    }
    else if(arr1.length < arr2.length){
        return -1;
    }
    else {
        arr1.forEach(item => {
            arr1sum += item;
        })
        
        arr2.forEach(item => {
            arr2sum += item;
        })
        
        if(arr1sum > arr2sum){
            return 1;
        }
        else if(arr1sum < arr2sum){
            return -1; 
        }
        else {
            return 0;
        }
    }
    
}