import sys

from collections import deque


def bfs(start) :
    visited =[start]

    num = [0]*(N+1)

    queue = deque()

    queue.append(start)

    while queue:
        node = queue.popleft()
        for e in adj[node]: 
            if e not in visited :
                num[e] = num[node] + 1 # 전에 들어온 노드 즉 전에 얼마나 거쳤는지 알 수 있음
                visited.append(e)
                queue.append(e)
    return sum(num)
            
N, M = map(int, input().split())

adj = [[] for _ in range(N + 1)]

visited = [False] * (N + 1)


for _ in range(M):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
            
result = [0]*N

for i in range(1,N+1) :
    result[i-1] = bfs(i)
 
print(result.index(min(result))+1) #index + 1
