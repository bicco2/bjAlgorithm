function solution(board, moves) {
    var answer = 0;
    var stack = [];
    for(let i = 0; i < moves.length; i++){
        var crane = moves[i] - 1 // 작동시킬 위치
        for(let j = 0; j < board.length; j++){
            if(board[j][crane] === 0){
                continue;   
            }else{
                if(stack[stack.length-1] === board[j][crane]){
                    stack.pop();
                    board[j][crane] = 0;
                    answer += 2;
                    break;
                }
                else {
                    stack.push(board[j][crane]);
                    board[j][crane] = 0;
                    break;
                }

            }
        }
    }
    console.log(board, stack);
    return answer;
}