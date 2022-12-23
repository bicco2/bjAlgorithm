import sys

from collections import deque 
    

def bfs(start):
    ans = []
    queue = deque()
    queue.append(start)
    visited[start] = 1

    
    while queue:
        node = queue.popleft()

        for e in adj[node]: 
            if visited[e] == 0 :
                queue.append(e)
                visited[e] = visited[node]+1
               


n,m,k,x = map(int,input().split())

adj = [[] for _ in range(n + 1)]
distance = [0] * (n+1)
visited = [0] * (n+1)

for i in range(m) : 
    a,b = map(int,input().split())
    adj[a].append(b)

bfs(x)


if k+1 in visited:
  for i in range(1, n+1):
    if visited[i]-1 == k:
      print(i)
else:
  print(-1)
    