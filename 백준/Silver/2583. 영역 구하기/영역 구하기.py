import sys

sys.setrecursionlimit(10**9)

input = sys.stdin.readline

def dfs(ox,oy) : # 직사각형 없는 나머지 부분들 검사 
    global cnt
    zone[ox][oy] = True # 방문한곳 true로 변경하고 
    cnt += 1 
    cx = [1, -1, 0, 0]
    cy = [0, 0, 1, -1]
    
    for i in range(4):
        X = ox + cx[i]
        Y = oy + cy[i]

        if (0 <= X < N) and (0 <= Y < M) and zone[X][Y] == False : #방문할 곳 true 아니면 방문해
            dfs(X,Y)
    

N,M,K = map(int,input().split()) # 5, 7, 3

zone = [[False] * (M) for _ in range(N)] #M개씩(행) N줄(열)

nonList = []

cnt = 0

# 직사각형 만들기 
for _ in range(K): #5
    edge = list(map(int, input().split()))
    for i in range(edge[1],edge[3]) : 
        for j in range(edge[0],edge[2]) : 
            if zone[i][j] == False : 
                zone[i][j] = True


for i in range(N): 
    for j in range(M):
        if zone[i][j] == False : 
            dfs(i,j)
            nonList.append(cnt)
            cnt = 0

nonList.sort()

print(int(len(nonList)))
print(*nonList)

