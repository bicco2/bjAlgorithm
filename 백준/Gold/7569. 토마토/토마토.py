import sys

from collections import deque 
    

def bfs():
  cx = [1, -1, 0, 0 ,0 ,0]
  cy = [0, 0, 1, -1, 0 ,0]
  cz = [0, 0, 0 ,0, 1, -1]

  queue = deque()

  for i in range(h):#1
    for j in range(n):#3
        for k in range(m):#5
            if arr[i][j][k] == 1:
                queue.append([j,k,i])

  while queue : 
    x,y,z = queue.popleft()
    
    for i in range(6):
      X = x + cx[i]
      Y = y + cy[i]
      Z = z + cz[i]

      if (0 <= X < n) and (0 <= Y < m) and (0 <= Z < h) and arr[Z][X][Y] == 0: 
          arr[Z][X][Y] = arr[z][x][y] + 1 
          queue.append([X,Y,Z])

m,n,h = map(int,input().split()) # 세로, 가로, 높이

arr = [[[0 for _ in range(m)] for _ in range(n)] for _ in range(h)]

for i in range(h):#1
    for j in range(n):#3
        lineArr = list(map(int, input().split()))
        for k in range(m):#5
            arr[i][j][k] = lineArr[k]

bfs()

check = False

max_num = 0

for z in range(h):
    for x in range(n):
        for y in range(m):
            if arr[z][x][y] == 0:
                check = True
            max_num = max(max_num, arr[z][x][y])
if check == True:
    print(-1)
else:
    print(max_num - 1)   



