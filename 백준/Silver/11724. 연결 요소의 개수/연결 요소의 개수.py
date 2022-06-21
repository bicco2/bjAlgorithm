import sys
sys.setrecursionlimit(10000)

def dfs(v):
    visited[v] = True
    for e in adj[v]: # adj[v]의 배열 요소 ex.adj[2] = [1,5] / e = 1이랑 e = 5 두개 실행 
        if not visited[e]: # 1은 방금 true로 됏으니 패스 5 아직 안했으니 ㄱ ㄱ
            dfs(e)
            
N, M = map(int, input().split())
adj = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)
count = 0

for _ in range(M):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
    
for j in range(1, N + 1):
    if not visited[j]: # 아직 한번도 방문 안했을때 (true)
        dfs(j)
        count += 1

print(count)

