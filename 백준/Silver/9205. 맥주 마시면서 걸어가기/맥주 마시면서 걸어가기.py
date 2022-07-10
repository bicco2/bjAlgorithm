import sys

from collections import deque 
    


def bfs():
    queue = deque()
    queue.append([home[0],home[1]])

    while queue:
        x,y = queue.popleft()

        if abs(x-festival[0]) + abs(y-festival[1]) <= 1000 :
            print("happy")
            return
        
        for i in range(n):
            if visited[i] == 0:
                newX, newY = market[i]
                if abs(newX-x) + abs(newY-y) <= 1000 :
                    queue.append([newX,newY])
                    visited[i] = 1

    print("sad")
    return


total = int(input())

for i in range(total) : 
    market = []
    n = int(input()) #편의점 갯수 
    home = list(map(int,input().split()))
    for _ in range(n) : 
        x,y = map(int,input().split())
        market.append([x,y])
    festival = list(map(int, input().split()))
    visited = [0 for _ in range(n+1)]
    bfs()