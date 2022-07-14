import sys

from collections import deque 
    
def bfs() : 
  queue = deque()
  queue.append([0,miro[0]])

  while queue : 
    node, jump = queue.popleft()
    for i in range(1,jump+1) : 
        if node+i >= n or visited[node+i] :
            continue
        visited[node+i] = visited[node] + 1
        queue.append([node+i,miro[node+i]])




n = int(input())

if n == 1 : 
    print(0)
else : 
    visited = [0]*n

    miro = list(map(int, input().split()))

    bfs()

    print(visited[-1] if visited[-1] else -1)