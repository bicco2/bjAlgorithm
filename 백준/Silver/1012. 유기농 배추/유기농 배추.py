import sys

sys.setrecursionlimit(10000)



def dfs(ox,oy) : 
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]

  for i in range(4):
    X = ox + cx[i]
    Y = oy + cy[i]

    if (0 <= X < N) and (0 <= Y < M) : 
      if graph[X][Y] == 1 : 
        graph[X][Y] = 2 
        dfs(X,Y)
    

total = int(input())
for _ in range(total) : 
  M,N,K = map(int, input().split())
  
  cnt = 0
  graph = [[0] * (M) for _ in range(N)]

  for _ in range(K) : 
    y,x = map(int, input().split())
    graph[x][y] = 1 

  for i in range(N):
    for j in range(M): 
      if graph[i][j] == 1 : 
        dfs(i,j)
        cnt += 1
  print(cnt)







