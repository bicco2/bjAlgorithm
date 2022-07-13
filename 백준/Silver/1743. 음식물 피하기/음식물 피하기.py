import sys

from collections import deque 
    

def bfs(ox,oy):
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]
  # 이렇게 하기 싫으면 deque 이용해서 1인 좌표를 넣어놓고 popleft 사용해서 불러오기 
  route[ox][oy] = 2
  count = 1

  queue = deque()
  queue.append([ox,oy])

  while queue : 
    x,y = queue.popleft()
    
    for i in range(4):
      X = x + cx[i]
      Y = y + cy[i]

      if (0 <= X < n) and (0 <= Y < m) and route[X][Y] == 1: 
          count += 1
          route[X][Y] = 2
          queue.append([X,Y])

  return count
               


n,m,k = map(int,input().split()) # 세로, 가로, 음식물 수 

route = [[0]* (m) for _ in range(n)]
visited = [[0]* (m) for _ in range(n)]

for i in range(k):
    x,y = map(int, input().split())
    route[x-1][y-1] = 1

max = -100000

for i in range(n):
  for j in range(m) : 
    if route[i][j] == 1 :
      thing = bfs(i,j)
      if max < thing :
        max = thing

print(max)


      


