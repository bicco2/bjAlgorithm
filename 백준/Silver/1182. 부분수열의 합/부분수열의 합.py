# import sys

# input = sys.stdin.readline

# n,s = map(int, input().split())

# num = list(map(int, input().split()))



# arr = []

# count = 0

# def dfs(start):
#     global count
#     if len(arr)==n:
#         return
#     if sum(arr) == s and len(arr) > 0 : 
#         count += 1

#     for i in range(start,n):
#         if num[i] not in arr:
#             arr.append(num[i])
#             dfs(i)
#             arr.pop()


# dfs(0)

# print(count)

import sys

input = sys.stdin.readline

def dfs(idx, sum):
    global cnt

    if idx == n: # 집합 전체 검사 했으니 리턴
        if sum == s: # 그 합이 원하는 값과 같다면 +1
            cnt += 1
        return

    #sum += s_[idx] # 들어온 값을 더해 주고



    dfs(idx + 1, sum + s_[idx]) # 다음 인덱스로 넘기면서 그 값을 추가 안한 배열과
    dfs(idx + 1, sum) # 추가한 배열을 넘겨준다 .

n, s = map(int, input().split())
s_ = list(map(int, input().split()))
cnt = 0
dfs(0, 0)
if s == 0 : 
    print(cnt-1)
else : 
    print(cnt)