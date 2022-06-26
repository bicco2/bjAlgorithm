import sys

sys.setrecursionlimit(10000)

def solve(day) : 
    if day > n :
        return -10000000
    if day == n :
        return 0

    sum = max(solve(day+1), solve(day+T[day]) + P[day])

    return sum




n = int(input())

T = []
P = []

for i in range(n):
    t,p = map(int, input().split())
    T.append(t)
    P.append(p)

print(solve(0))