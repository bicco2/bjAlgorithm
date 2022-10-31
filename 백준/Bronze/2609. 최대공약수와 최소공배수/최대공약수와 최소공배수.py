N, M = map(int, input().split())

Nfactor = [] 
Mfactor = []

# 1. 최대공약수
for i in range(1,N+1): # 첫번쨰 수의 공약수 찾고
    if N % i == 0 :
        Nfactor.append(i)

for i in Nfactor: # 두번째 수에서 첫번째 수의 공약수 중에 해당 되는 약수 찾기
    if M % i == 0 :
        Mfactor.append(i)

print(max(Mfactor)) # 그 중 최대값 출력

# for i in range(min(N,M), 0 , -1):
#     if N % i == 0 and M % i == 0:
#         print(i)
#         break

# 2. 최소공배수

for i in range(max(N,M), (N*M)+1):
    if i % N == 0 and i % M ==0:
        print(i)
        break

