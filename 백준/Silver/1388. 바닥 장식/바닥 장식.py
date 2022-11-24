
from collections import deque

def bfs(a,b):
    queue = deque([(a,b)])
    while queue : 
        x,y = queue.popleft()
        if board[x][y] == "-":
            board[x][y] ="1"
            if y+1 < m and board[x][y+1] == "-":
                queue.append((x,y+1))
        elif board[x][y] == "|":
            board[x][y] = "1"
            if x+1 < n and board[x+1][y] == "|":
                queue.append((x+1, y))


n, m = map(int, input().split())
count = 0
board = [list(input()) for _ in range(n)]

for i in range(n):
    for j in range(m):
        if board[i][j] != "1":
            bfs(i,j)
            count += 1

print(count)