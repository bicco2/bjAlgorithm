# 실패  참고 :  https://fre2-dom.tistory.com/410?category=939350

n = int(input())

board = [list(map(int, input().split())) for _ in range(n)]

dp = [[0] * n for _ in range(n)]
dp[0][0] = 1

for i in range(n):
  for j in range(n) : 
    # 여기서 break로 안멈춰주면 
    if i == n-1 and j == n-1:
      print(dp[i][j])
      break

    if i + board[i][j] < n:
      dp[i + board[i][j]][j] += dp[i][j]
    
    if j + board[i][j] < n:
      dp[i][j + board[i][j]] += dp[i][j]
    
