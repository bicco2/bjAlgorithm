from collections import deque

ox = [-2,-2,-1,1,2,2,1,-1]
oy = [-1,1,2,2,1,-1,-2,-2]

total = int(input()) #3

def bfs(sx,sy,ex,ey) :
    q = deque()
    q.append([sx,sy])
    board[sx][sy] = 1
    while q : 
        x,y = q.popleft()

        if (x == ex and y == ey): 
            print(board[x][y]-1)
            return

        for i in range(8) : 
            X = x + ox[i]
            Y = y + oy[i]

            if (0 <= X < N) and (0 <= Y < N) and board[X][Y] == 0:
                board[X][Y] = board[x][y] + 1
                q.append([X,Y])





for i in range(total):
    N = int(input()) # 8, 100, 10
    startX, startY = map(int, input().split()) # (0,0)(0,0)(1,1)
    endX, endY = map(int, input().split()) # (7,0)(30,50)(1,1)
    board = [[0]*N for _ in range(N)] # 8X8, 100X100, 10X10 
    bfs(startX,startY,endX,endY)
