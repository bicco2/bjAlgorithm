function solution(n, computers) {
    let parent = [];
    for(let i=0; i<n; i++) parent[i] = i;

    for(let i = 0; i < computers.length; i++){
        for(let j = 0; j < computers[i].length; j++){
            if(i === j){
                continue;
            }
            // 연결 되어 있으면 그룹화
            if(computers[i][j] === 1){ 
                union(i,j);
            }
        }
    }
        console.log(parent);
    const tmp = []; // 집합의 개수를 세어주기 위해 임시로 만든 배열
    for (let i = 0; i < parent.length; i++) {
        const t = find(parent[i]); // 최상단의 부모로 업데이트
        // tmp에 포함이 안되어있으면 새로운 집합이므로 추가
        if (!tmp.includes(t)) {
          tmp.push(t);
        }
    }
    console.log(parent);
      // 집합의 개수 출력
    return tmp.length;
    
    function union(x,y){
        const parentX = find(x);
        const parentY = find(y);
        
        if(parentX !== parentY){
            parent[parentY] = parentX;
        }
    }
    
    // 부모 찾는 함수 가장 끝 부모면 return 하고 아니면 find 재귀 호출해서 계속 찾아냄
    function find(node){
        if(parent[node] === node){
            return node;
        }
        else{
            parent[node] = find(parent[node]);
            return parent[node];
        }
    }
    

}