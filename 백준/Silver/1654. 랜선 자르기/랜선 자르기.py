import sys

input = sys.stdin.readline

K, N = map(int, input().split()) # 4개 존재 11개 만들기

lineArr = []

for _ in range(K):
    lineArr.append(int(input()))

start = 1
end = max(lineArr)


answer = 0

while start <= end:
    mid = (start + end) // 2

    lineCount = 0
    for i in lineArr : 

        lineCount += i // mid 

    if lineCount >= N :
        answer = mid
        start = mid+1
    else:
        end = mid - 1

print(answer)