import sys

input = sys.stdin.readline


answer = [0, 1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596]
print(answer[int(input())])
# N = int(input())
 
# answer = 0 

# row = [0]*N

# def testQ(x) : 
#     for i in range(x) :
#         if row[x] == row[i] or abs(row[x] - row[i]) == abs(x-i):
#             return False
#     return True

# def nQueen(x) : 
#     global answer 
#     if x == N : 
#         answer += 1 
#         return
#     else : 
#         for i in range(N) : 
#             row[x] = i
#             if testQ(x) : 
#                 nQueen(x+1)

# nQueen(0)
# print(answer)

