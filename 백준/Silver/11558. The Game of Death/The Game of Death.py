def dfs(start):
    for n in graph[start]:
        if visited[n] == 0:
            visited[n] = visited[start]+1
            dfs(n)
            
for _ in range(int(input())):
    N = int(input())
    graph = [[] for _ in range(N+1)]
    for i in range(1, N+1):
        v = int(input())
        graph[i].append(v)
    visited = [0]*(N+1)
    dfs(1)
    if(visited[N] > 0):
        print(visited[N])
    else:
        print(0)