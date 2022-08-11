import sys

input = sys.stdin.readline
sys.setrecursionlimit(10**9)

def dfs(s,w) : 
    for a,b in graph[s] :
        if distance[a] == -1 :
            distance[a] = w + b
            dfs(a,distance[a])

total = int(input())
graph = [[] for _ in range(total + 1)]


for _ in range(total - 1):
    lineArr = list(map(int, input().split()))
    for i in range(1,len(lineArr)) :
        if(lineArr[i] == -1) : 
            break
        else : 
            if i%2 != 0: #홀수면 
                graph[lineArr[0]].append([lineArr[i], lineArr[i+1]])
                graph[lineArr[i]].append([lineArr[0], lineArr[i+1]])


# print(graph) 



distance = [-1] *(total+1) # 1~12 여서 13개 필요
distance[1] = 0
dfs(1, 0)

start = distance.index(max(distance))

distance = [-1] *(total+1) # 1~12 여서 13개 필요
distance[start] = 0
dfs(start,0)

print(max(distance))


