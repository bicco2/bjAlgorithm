import copy

R, C = map(int, input().split())

dadoMap = []

for i in range(R):
    dadoMap.append(list(input()))

copyMap = copy.deepcopy(dadoMap) # 이래야 아예 새로운 배열을 할당 받음 그냥 복사하면 얕은 복사됨



def checkSum(x,y):
    ox = [0,0,-1,1]
    oy = [-1,1,0,0]
    cnt = 0
    for i in range(4) : 
        X = x + ox[i] 
        Y = y + oy[i]

        if (0<=X<R) and (0<=Y<C) :
            if dadoMap[X][Y] == "X" :
                continue
            else : 
                cnt += 1
        else :  # 배열 범위 외의 것들은 모두 바다임 
            cnt += 1

    if (cnt>=3):
        copyMap[x][y] = "."

for i in range(R): # 5
    for j in range(C): # 3
        if dadoMap[i][j] == 'X': # X 일때 함수로 넘겨서 돌리자 
            # 함수 돌려 oxoy 돌리는거 
            checkSum(i,j)


xArr = []
yArr = []

for i in range(R): # 5
    for j in range(C): # 3
        if copyMap[i][j] == "X":
            xArr.append(i)
            yArr.append(j) 

for i in range(min(xArr), max(xArr)+1): #1~2
    for j in range(min(yArr), max(yArr)+1): # 1~7
        print(copyMap[i][j], end="")
    print()
