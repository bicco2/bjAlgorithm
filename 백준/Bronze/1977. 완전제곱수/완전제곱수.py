import sys

input = sys.stdin.readline

M = int(input())
N = int(input())

arr = []

for i in range(N) : 
    if M <= i**2 <= N : 
       arr.append(i**2) 

if arr == [] :
    print(-1)
else : 
    print(sum(arr))
    print(arr[0])