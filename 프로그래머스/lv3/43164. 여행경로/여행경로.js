function solution(tickets) {
    var answer = [];
    var vis = [...new Array(tickets.length)].map(v=>false);

    tickets.sort();
    
    function dfs(cur,cnt,path){
        if(cnt===tickets.length && answer.length===0){ //정렬했으므로 처음오는 경우의 수가 답
            answer=path;
            return;
        }
        for(let i=0;i<tickets.length;i+=1){
            if(vis[i])continue;
            if(tickets[i][0]===cur){ // 출발하는 공항이 같다.
                vis[i]=true;
                dfs(tickets[i][1],cnt+1,[...path,tickets[i][1]]);//배열 복사해서 넣어주기
                vis[i]=false;
            }
        }
    }
    dfs("ICN",0,["ICN"])
    return answer;
}