n = int(input())

rockleg = list(input().split(" ")) # array

startIndex = int(input()) # 3 >> -1 해서 가야함 

count = 0 

def dfs(startIdx ,visited=[]) : 
    global count
    count += 1
    visited.append(startIdx)
    move = int(rockleg[startIdx]) # rockleg[2] == 2  base = 2 
    for _ in range(2): 
        if (0 <= (startIdx-move) < n) and startIdx-move not in visited : 
            dfs((startIdx-move), visited)

        if (0 <= (startIdx+move) < n) and startIdx+move not in visited : 
            dfs((startIdx+move), visited)
    
dfs(startIndex-1)

print(count)
    