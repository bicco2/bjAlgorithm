import sys
input = sys.stdin.readline
n = int(input())

x = map(int, input().split())
x= list(x)

op = map(int, input().split())
op = list(op)

maxi = -1e9
mini = 1e9

def dfs(N, sum, plus, minus, multi, divide):
    global maxi, mini
    if N == n :
        maxi = max(sum, maxi)
        mini = min(sum, mini)
        return
    
    if plus :
        dfs(N + 1, sum + x[N], plus - 1, minus, multi, divide)
    if minus :
        dfs(N + 1, sum - x[N], plus , minus - 1, multi, divide)
    if multi :
        dfs(N + 1, sum * x[N], plus , minus, multi - 1, divide)
    if divide :
        dfs(N + 1, int(sum / x[N]), plus, minus, multi, divide - 1)

dfs(1, x[0], op[0], op[1], op[2], op[3])

print(maxi)
print(mini)