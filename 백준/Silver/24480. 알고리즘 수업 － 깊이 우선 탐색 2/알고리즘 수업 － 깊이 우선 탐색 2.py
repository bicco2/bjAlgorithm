import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

def dfs(v):
    global cnt 
    visited[v] = cnt
    adj[v].sort(reverse=True)
    for e in adj[v]: # adj[v]의 배열 요소 ex.adj[2] = [1,5] / e = 1이랑 e = 5 두개 실행 
        if not visited[e]: # 1은 방금 true로 됏으니 패스 5 아직 안했으니 ㄱ ㄱ
            cnt += 1
            dfs(e)
            
N, M, start = map(int, input().split())
adj = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)
cnt = 1


for _ in range(M):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)


dfs(start)


for i in range(1,N+1) : 
    print(visited[i])

