import sys
import copy


input = sys.stdin.readline

def dfs(ox,oy) : 
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]

  for i in range(4):
    X = ox + cx[i]
    Y = oy + cy[i]

    if (0 <= X < N) and (0 <= Y < M) : 
      if copyMap[X][Y] == 0 : 
        copyMap[X][Y] = 2 
        dfs(X,Y)

    

def createWall(wCnt) : 
  global max_zCnt,zCnt,copyMap
  if wCnt == 3 : 
    copyMap = copy.deepcopy(virusMap)
    for i in range(N): #8
      for j in range(M): #10
        if copyMap[i][j] == 2 : 
          dfs(i,j)
    for x in range(N): #8
        for y in range(M): #10
          if copyMap[x][y] == 0 : 
            zCnt +=1
            #print(zCnt)
    max_zCnt = max(max_zCnt, zCnt)
    zCnt = 0


    return

  for i in range(N): #8
    for j in range(M): #10
      if virusMap[i][j] == 0 : 
        virusMap[i][j] = 1 
        createWall(wCnt+1)
        virusMap[i][j] = 0


zCnt = 0
wCnt = 0 
max_zCnt = -1000000

N,M = map(int, input().split()) # 7,7

virusMap = [[0] * (M) for _ in range(N)] #M개씩(행) N줄(열)
copyMap = [[0] * (M) for _ in range(N)]

for i in range(N): #7
    lineArr = list(map(int, input().split()))
    for j in range(M): #7
        virusMap[i][j] = lineArr[j]
        copyMap[i][j] = lineArr[j]

createWall(wCnt)
print(max_zCnt)


