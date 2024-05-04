/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let visited = Array.from(Array(m), () => new Array(n).fill(false));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let queue = [];

    let answer = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 2){
                visited[i][j] = true;
                queue.push([i,j,0]);
            }
        }
    }

    while(queue.length !== 0){
        let [x,y,cost] = queue.shift();

        for(let i = 0; i < 4; i++){
            let X = x + dx[i];
            let Y = y + dy[i];
            if (X >= 0 && X < m && Y >= 0 && Y < n && !visited[X][Y] && grid[X][Y] === 1) {
                // queue에 현재의 cost를 담고 있어야한다.
                grid[X][Y] = 2;
                queue.push([X,Y,cost+1]);
                visited[X][Y] = true;
            }

        }
  
        answer = cost;
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }

    return answer;
};