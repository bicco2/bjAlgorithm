import sys 

from collections import deque

def bfs(start_v): # 1시작 
  cnt = 0
  visited =[start_v]
  queue = deque()
  queue.append(start_v)

  while queue:
    node = queue.popleft()

    for w in range(len(graph[start_v])):
      if graph[node][w] == 1 and (w not in visited) :
        visited.append(w)
        queue.append(w)
        cnt += 1 
  print(cnt)


N = int(input())
M = int(input())


graph = [[0] * (N + 1) for _ in range(N + 1)] #노드 갯수 만큼의 이차원 배열 생성 8x8

for _ in range(M): #간선 갯수만큼 for문 돌려서 양방향 간선 생성 / 6개의 간선 생성 
  m1, m2 = map(int, input().split())
  # 노드 연결 하기
  graph[m1][m2] = graph[m2][m1] = 1

bfs(1)