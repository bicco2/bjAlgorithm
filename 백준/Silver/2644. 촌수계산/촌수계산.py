import sys
sys.setrecursionlimit(10**9)

input = sys.stdin.readline

def dfs(v,num):
    global total
    num += 1
    visited[v] = True

    if v == p2:
        total = num 

    for e in adj[v]: # adj[v]의 배열 요소 ex.adj[2] = [1,5] / e = 1이랑 e = 5 두개 실행 
        if not visited[e] : # 1은 방금 true로 됏으니 패스 5 아직 안했으니 ㄱ ㄱ
            dfs(e,num)

N = int(input())
adj = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)

total = 0

p1, p2 = map(int, input().split())

M = int(input())

for _ in range(M):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)
    


dfs(p1,0)

if total :
    print(total-1)
else : 
    print(-1)

