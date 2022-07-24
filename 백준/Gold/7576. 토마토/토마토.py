from collections import deque

ox = [0,0,-1,1]
oy = [-1,1,0,0]

M,N = map(int, input().split())

#방문 확인 배열
visited = [[0]* M for _ in range(N)]
#토마토 상자 
box = [[0] * M for _ in range(N)]

q = deque()

for i in range(N):
  lineArr = list(map(int, input().split()))
  for j in range(M): 
    box[i][j] = lineArr[j]
    if lineArr[j] == 1 : 
      q.append([i,j]) # 아예 배열 할당하면서 익은 토마토 위치 큐에 추가
      visited[i][j] == 1 # 방문한걸로 치자 

# 처음에 아예 다 익었다면 그냥 0 출력
test = True
for i in box:
    if 0 in i:
      test = False
if test :  # 이걸로 감싸야겠따. 
  print(0)
else : 
  while q : 
    x,y = q.popleft()

    for i in range(4) : 
      X = x + ox[i] 
      Y = y + oy[i]

      if (0 <= X < N) and (0 <= Y < M) and visited[X][Y] == 0 and box[X][Y] == 0: # 방문을 안했고, 익지 않은 토마토고 배열에 안벗어난다면 
        visited[X][Y] = 1 # 방문한 걸로 만들고 
        box[X][Y] = box[x][y] + 1 # box에 토마토가 익었다고 표시 밑 방문 일수 체크 ? 
        q.append([X,Y])

  test2 = False
  for i in box:
      if 0 in i:
        test2 = True

  if test2 : 
    print(-1)
  else : 
    maxValue = max(map(max, box))
    print(maxValue-1)