import sys

from collections import deque


def bfs(start,cnt) :
    global result
    queue = deque()

    queue.append([start,cnt])

    while queue:
        
        node,count = queue.popleft()
        if node == B:
            result = count
            break
         
        if node * 2 <= B :
            queue.append((node*2, count+1))
        if int(str(node)+"1") <= B :
            queue.append((int(str(node)+'1'),count+1))

    
            
A,B = map(int, input().split())

result = -1

bfs(A,1)


print(result)