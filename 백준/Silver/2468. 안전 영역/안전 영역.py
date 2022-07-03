import sys

sys.setrecursionlimit(10**9)

input = sys.stdin.readline

def dfs(ox,oy) : # 비 침수 검사 함 (방문 안도어있으면 침수 안된 곳임) 애 끝나면 하나의 지역 완성되니까 cnt ++ 
    visited[ox][oy] = False
    cx = [1, -1, 0, 0]
    cy = [0, 0, 1, -1]

    for i in range(4):
        X = ox + cx[i]
        Y = oy + cy[i]

        if (0 <= X < N) and (0 <= Y < N) and visited[X][Y] == True :
            # print(visited)
            # print()
            dfs(X,Y)
        
    


notSink = 0

max_notSink = -1000000

N = int(input()) # 5

rainSpace = [[0] * (N) for _ in range(N)] #M개씩(행) N줄(열)


for i in range(N): #5
    lineArr = list(map(int, input().split()))
    for j in range(N): #5
        rainSpace[i][j] = lineArr[j]

maxHeight = int(max(map(max, rainSpace)))



for m in range(maxHeight) : 
 
  if m < maxHeight :
   # print(m)
    visited = [[False] * N for _ in range(N)] # 한번 돌고 방문 리스트 초기화 해야함 왜 ? 계속 확인해야함 
    for i in range(N): #5
      for j in range(N): #5
        if rainSpace[i][j] > m :  #현재 최대 높이 기준으로 그 높이보다 작은것들 싹다 방문시켜야함 
          visited[i][j] = True
    for x in range(N):
        for y in range(N):
          if visited[x][y] == True : 
            dfs(x,y)
            notSink +=1
            #print(zCnt)
    
    max_notSink = max(max_notSink, notSink)

    notSink = 0

      #maxHeight = 최대 높이임 9
     
 





print(max_notSink)


