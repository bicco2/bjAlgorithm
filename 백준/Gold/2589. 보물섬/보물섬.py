import sys
from collections import deque 
input = sys.stdin.readline

def bfs(ox,oy):
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]
  # 이렇게 하기 싫으면 deque 이용해서 1인 좌표를 넣어놓고 popleft 사용해서 불러오기 

  queue = deque()
  queue.append([ox,oy])

  visited[ox][oy] = 1

  max_n = 0

  while queue : 
    x,y = queue.popleft()
    
    for i in range(4):
      X = x + cx[i]
      Y = y + cy[i]

      if (0 <= X < n) and (0 <= Y < m) and board[X][Y] == "L" and visited[X][Y] == 0: 
          visited[X][Y] = visited[x][y] + 1
          max_n = max(max_n, visited[X][Y])
          queue.append([X,Y])

  return max_n
               


n,m = map(int,input().split()) # 세로, 가로 / 5,7 


board = [[0]* (m) for _ in range(n)]

for i in range(n): 
    lineArr = list(input().strip())
    for j in range(m) : 
        board[i][j] = lineArr[j]

result = 0

for i in range(n):
  for j in range(m) :
    if board[i][j] == "L" : 
        visited = [[0]* (m) for _ in range(n)]
        result = max(result, bfs(i,j))

print(result-1)
