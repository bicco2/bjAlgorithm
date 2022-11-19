import sys
sys.setrecursionlimit(10**9)
input = sys.stdin.readline

def dfs(ox,oy) : 
  global cnt, vNum
  cx = [1, -1, 0, 0]
  cy = [0, 0, 1, -1]

  if ox < 0 or ox >= n or oy < 0 or oy >= n:
        return False

  if board[ox][oy] == 1:
    vNum +=1 
    board[ox][oy] = 2
    for i in range(4):
        X = ox + cx[i]
        Y = oy + cy[i]
        dfs(X,Y)


n = int(input())
board = [[0] * (n) for _ in range(n)] 
vNum = 0
cnt = 0
vNumList = []

for i in range(n) : 
    line = list(map(int, input().strip()))
    for j in range(n) : 
       board[i][j] = line[j] 

for i in range(n) : 
    for j in range(n) : 
        if board[i][j] == 1 :
            dfs(i,j)
            cnt += 1
            vNumList.append(vNum)
            vNum = 0


print(cnt)   
vNumList.sort()
for i in vNumList :
    print(i)