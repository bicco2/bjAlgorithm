n=int(input())

A = list(map(int, input().split()))
B = list(map(int, input().split()))

sum = 0 

for _ in range(n):
    sum += A.pop(A.index(min(A))) * B.pop(B.index(max(B)))

print(sum)