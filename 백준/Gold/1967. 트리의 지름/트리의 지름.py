import sys

input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def dfs(s,w) : 
    for a,b in graph[s] :
        if distance[a] == -1 :
            distance[a] = w + b
            dfs(a,distance[a])

n = int(input())
graph = [[] for _ in range(n + 1)]


for _ in range(n - 1):
    a, b, c = map(int, input().split())
    graph[a].append([b, c])
    graph[b].append([a, c])


distance = [-1] *(n+1) # 1~12 여서 13개 필요
distance[1] = 0
dfs(1, 0)

start = distance.index(max(distance))

distance = [-1] *(n+1) # 1~12 여서 13개 필요
distance[start] = 0
dfs(start,0)

print(max(distance))