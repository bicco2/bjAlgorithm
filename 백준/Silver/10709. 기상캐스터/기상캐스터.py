H, W = map(int, input().split()) # 3, 4

joiMap = [[-1 for col in range(W)] for row in range(H)]

for i in range(H):
    WLine =  input()
    for j in range(len(WLine)):
        if WLine[j] == 'c':
            joiMap[i][j] = 0

for cnt in range(W):
    for i in range(W): # 4
        for j in range(H): # 3
            if i+1 < W : 
                if joiMap[j][i] == cnt and joiMap[j][i+1] == -1 :
                    joiMap[j][i+1] = cnt+1

# for i in range(H):
#     for j in range(W):
#         print(joiMap)

for i in joiMap: 
    for j in range(W):
        print(i[j],end=" ")
    print()