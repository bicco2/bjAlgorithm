def dfs(y, x):
    global answer
    tmp=board[y][x]
    board[y][x]=0
    dy=[0, 1]
    dx=[1, 0]
    if y==n-1 and x==n-1:
        answer='HaruHaru'
        return
    for i in range(2):
        ny=y+(dy[i]*tmp)
        nx=x+(dx[i]*tmp)
        if ny>=0 and nx>=0 and ny<n and nx<n and board[ny][nx]!=0:
            dfs(ny, nx)
n=int(input())
board=[]
for _ in range(n):
    board.append(list(map(int, input().split())))
answer='Hing'
dfs(0, 0)
print(answer)