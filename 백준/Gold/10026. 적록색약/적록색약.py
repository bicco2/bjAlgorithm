import sys

sys.setrecursionlimit(10000)



def dfs(ox,oy,wColor) : 
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]

  for i in range(4):
    X = ox + cx[i]
    Y = oy + cy[i]

    if (0 <= X < N) and (0 <= Y < N) : 
        if color[X][Y] == wColor : 
            color[X][Y] = 2 
            dfs(X,Y,wColor)

def dfs2(ox,oy,wColor) : 
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]

  for i in range(4):
    X = ox + cx[i]
    Y = oy + cy[i]

    if (0 <= X < N) and (0 <= Y < N) : 
        if color2[X][Y] == wColor : 
            color2[X][Y] = 2 
            dfs2(X,Y,wColor)
    

N = int(input())

cnt1 = 0
cnt2 = 0


color = [[0] * (N) for _ in range(N)] #M개씩(행) N줄(열)
color2 = [[0] * (N) for _ in range(N)] #M개씩(행) N줄(열)

for i in range(N): #5
    lineArr = input().strip()
    for j in range(N): #5
        color[i][j] = lineArr[j]
        color2[i][j] = lineArr[j]    




for i in range(N): #8
    for j in range(N): #10
        if color[i][j] != 2 : 
            dfs(i,j,color[i][j])
            cnt1 += 1



print(cnt1)


for i in range(N): #5
    for j in range(N): #5
        if color2[i][j] == 'G':
            color2[i][j] = 'R'

#print(color2)

for i in range(N): #8
    for j in range(N): #10
        if color2[i][j] != 2 : 
            dfs2(i,j,color2[i][j])
            cnt2 += 1

print(cnt2)