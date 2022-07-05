import sys

from collections import deque

cx = [1, -1, 0, 0]
cy = [0, 0, 1, -1]


def bfs(ox,oy):
    queue = deque()
    queue.append([ox,oy])

    while queue:
        x,y = queue.popleft()

        for i in range(4):
            X = x + cx[i]
            Y = y + cy[i]

            if (0 <= X < N) and (0 <= Y < M) and maze[X][Y] == 1 :  
                    maze[X][Y] = maze[x][y] + 1
                    queue.append([X,Y])

    return maze[N-1][M-1]
            


N, M = map(int, input().split())

maze = [[0] * (M) for _ in range(N)] #노드 갯수 만큼의 이차원 배열 생성

for i in range(N): 
    lineArr = list(map(int, input().strip()))
    for j in range(M) : 
        maze[i][j] = lineArr[j]

print(bfs(0,0))

