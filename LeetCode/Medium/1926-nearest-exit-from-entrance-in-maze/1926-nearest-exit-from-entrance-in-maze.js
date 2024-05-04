/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let m = maze.length;
    let n = maze[0].length;
    let visited = Array.from(Array(m), () => new Array(n).fill(false));

    let cost = 0;

    let answer= [];

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // entrance = 시작점 

    function bfs(x,y,firstCost){
        let queue = [];

        queue.push([x,y,firstCost]);


        while(queue.length !== 0){
            let [x,y,cost] = queue.shift();



            for(let i = 0; i < 4; i++){
                let X = x + dx[i];
                let Y = y + dy[i];
                if (X >= 0 && X < m && Y >= 0 && Y < n && !visited[X][Y] && maze[X][Y] !== '+') {
                    queue.push([X,Y,cost+1]);
                    visited[X][Y] = true;
                    if(X === 0 || Y === 0 || X === m - 1 || Y === n - 1){
                        answer.push(cost + 1);
                    }
                }

            }
        }
    }
    visited[entrance[0]][entrance[1]] = true;
    bfs(entrance[0],entrance[1],cost);

    console.log(answer);
    if(answer.length === 0){
        return -1;
    }
    else {
        return Math.min(...answer);
    }
    
};