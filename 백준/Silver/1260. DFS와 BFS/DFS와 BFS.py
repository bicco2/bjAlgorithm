import sys
from collections import deque

N, M, V = map(int, input().split())

graph = [[0] * (N + 1) for _ in range(N + 1)] #노드 갯수 만큼의 이차원 배열 생성

for _ in range(M): #간선 갯수만큼 for문 돌려서 양방향 간선 생성
  m1, m2 = map(int, input().split())
  # 노드 연결 하기
  graph[m1][m2] = graph[m2][m1] = 1


def dfs(start_v, visited = []) :
  visited.append(start_v)
  print(start_v, end=' ')

  for w in range(len(graph[start_v])) : #작은것부터 하나씩 살펴보면서 깊이 탐색함, 할때 간선 연결됐는지(1) 이미 탐색한 노드인지(visited) 두가지 확인해야함 
    if graph[start_v][w] == 1 and (w not in visited):
      dfs(w, visited)


def bfs(start_v):
  visited =[start_v]
  queue = deque()
  queue.append(start_v)

  while queue:
    node = queue.popleft()
    print(node, end= ' ')

    for w in range(len(graph[start_v])):
      if graph[node][w] == 1 and (w not in visited) :
        visited.append(w)
        queue.append(w)



dfs(V)
print()
bfs(V)

