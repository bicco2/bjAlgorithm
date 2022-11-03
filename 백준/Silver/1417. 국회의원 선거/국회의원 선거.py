N = int(input())

NPeople = [int(input()) for _ in range(N)]

if N > 1: 
    remainMax = max([NPeople[i] for i in range(1,N)])

    count = 0

    while NPeople[0] <= remainMax :
        remainMaxIndex = NPeople.index(remainMax,1,N) # 인덱스 1 부터 찾기 시작 // 다솜 제외 최대값 인덱스 찾기 
        NPeople[remainMaxIndex] -= 1 
        NPeople[0] += 1
        remainMax = max([NPeople[i] for i in range(1,N)])
        count += 1


    print(count)

else : 
    print(0)








