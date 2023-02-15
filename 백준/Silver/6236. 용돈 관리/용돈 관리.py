from sys import stdin

n, m = map(int, stdin.readline().split())
arr = []
for _ in range(n):
    arr.append(int(stdin.readline()))

start = min(arr)
end = sum(arr)

while start <= end:
    mid = (start + end) // 2
    money = mid
    cnt = 1

    for i in arr:
        if money - i < 0:
            money = mid
            cnt += 1
        money -= i

    if cnt > m or mid < max(arr):
        start = mid + 1
    else:
        end = mid - 1
        ans = mid

print(ans)