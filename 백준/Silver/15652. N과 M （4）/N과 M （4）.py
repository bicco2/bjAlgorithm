import sys

input = sys.stdin.readline

n,m = list(map(int,input().split()))
 
s = []


 
def dfs(start):
    if len(s)==m:
        print(' '.join(map(str,s)))
        return


    for i in range(start,n+1):
        #print(i)
        s.append(i)
        #print(s)
        #print("dfs 실행")
        dfs(i)
        #print("dfs 종료")
        s.pop()
        #print(s)

dfs(1)

