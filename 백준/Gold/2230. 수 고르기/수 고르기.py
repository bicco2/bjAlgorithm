import sys
n,m =map(int, input().split())
INF = sys.maxsize
array = []

for _ in range(n):
    array.append(int(input()))

start = 0
end = 0
result = INF

array.sort()

while start < n and end<n:
    interval = abs(array[start]-array[end])
    if interval == m : 
        result = interval
        break
    elif interval > m :
        result = min(interval, result)
        start += 1
    else:
        end += 1

print(result)