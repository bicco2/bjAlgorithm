total = int(input())

for _ in range(total):
    docNum , whereNum = map(int, input().split()) # 4 2 
    importance = list(map(int, input().split())) # 1 2 3 4
    idx = [0 for _ in range(docNum)]
    idx[whereNum] = 1 # 0 0 1 0
    cnt = 0 
    while True:
        if importance[0] == max(importance) : 
            test = importance.pop(0)
            result = idx.pop(0)
            cnt += 1
            if result == 1 : 
                print(cnt)
                break
        else :
            importance.append(importance.pop(0))
            idx.append(idx.pop(0))
    

