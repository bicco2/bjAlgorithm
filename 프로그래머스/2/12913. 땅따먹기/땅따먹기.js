function solution(land) {
    var answer = 0;
    
    // 초기 세팅 첫 값을 세팅해야한다.
    // 여기서 dp 배열은 각 행까지 내려왔을 때의 누적 최대값을 기록하는 배열이다.
    let dp = Array.from(Array(land.length), () => Array(4).fill(0));
    
    for(let i = 0; i < 4; i++){
        dp[0][i] = land[0][i];
    }
    // 이전 max 값과 이전 max의 인덱스 값
    let preMax = Math.max(...dp[0]);
    let preIdx = dp[0].indexOf(preMax);

    // 각 행을 로직에 따라 수행
    for(let x = 1; x < land.length; x++){
        for(let y = 0; y < 4; y++){
            // 이전 max 값과 y(열)가 다르다면 그대로 진행
            if(y !== preIdx){
                dp[x][y] = land[x][y] + preMax;
            }
            // 이전 max 값과 y(열)가 같다면 두번째 max 값 구한 후 진행
            else {
                dp[x][y] = land[x][y] + dp[x-1].sort((a,b) => b-a)[1];
            }            
        }
        // 이전 최대값과 인덱스를 최신화 해준다
        preMax = Math.max(...dp[x]);
        preIdx = dp[x].indexOf(preMax);
    }
    
    answer= dp[land.length -1 ].sort((a,b) => b-a)[0];

    return answer;
}