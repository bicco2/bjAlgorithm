import sys

sys.setrecursionlimit(10000)



def dfs(ox,oy) : 
  addX = [0, 0, -1, -1, -1, 1, 1, 1]
  addY = [1, -1, 1, 0, -1, 1, 0, -1]# cy

  for i in range(8):
    X = ox + addX[i]
    Y = oy + addY[i]

    if (0 <= X < h) and (0 <= Y < w) : 
      if graph[X][Y] == 1 : 
        graph[X][Y] = 2 
        dfs(X,Y)
    





while True:
    w,h = map(int,input().split())
    if w != 0 and h != 0:
        cnt = 0
        graph = [[0] * (w) for _ in range(h)]#W개씩(행) H줄(열)
        for i in range(h) : 
            arrW = input().split()
            for j in range(w):
                graph[i][j] = int(arrW[j])
        #print(graph)
    else: 
        break

    for i in range(h): #8
        for j in range(w): #10
            if graph[i][j] == 1 : 
                dfs(i,j)
                cnt += 1
    print(cnt)



