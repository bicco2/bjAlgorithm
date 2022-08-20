from collections import deque 

A,B,C = map(int, input().split())

queue = deque()
queue.append([0,0,C])
res = set()
visited = set()

while queue : 
    a,b,c= queue.popleft()

    if(a,b,c) in visited :
        continue 
    else :
        visited.add((a,b,c))

    if a == 0:
        res.add(c)

    if a+b > B :
        queue.append([a+b-B,B,c])
    else : 
        queue.append([0,a+b,c])
    if a+c > C :
        queue.append([a+c-C,b,C])
    else : 
        queue.append([0,b,a+c])

    if b+c > C :
        queue.append([a,b+c-C, C])
    else : 
        queue.append([a,0,b+c])
    if b+a > A :
        queue.append([A,b+a-A,c])
    else : 
        queue.append([b+a,0,c])


    if c+a > A :
        queue.append([A,b,c+a-A])
    else : 
        queue.append([c+a,b,0])
    if c+b > B :
        queue.append([a,B,c+b-B])
    else : 
        queue.append([a,c+b,0])


res = list(res)
res.sort()
print(" ".join(map(str,res)))