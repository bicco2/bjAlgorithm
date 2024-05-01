/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let adjArr = Array.from(Array(n), () => new Array());

    let edge = Array.from(Array(n), () => new Array());

    const visited = new Array(n).fill(false);

    let count = 0;

    


    for(let [x,y] of connections){
        adjArr[x].push(y);
        adjArr[y].push(x);

        edge[x].push(y);
    }

console.log("adjArr : ", adjArr);
    function dfs(start){
        for(let item of adjArr[start]){
            if(!visited[item]){
                if(edge[start].includes(item)) {
                    count++;
                }
                visited[item] = true;
                dfs(item);
            }
        }

    }

    visited[0] = true;
    dfs(0);

    return count;
    
};