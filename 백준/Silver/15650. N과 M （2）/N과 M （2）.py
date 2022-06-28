import sys

input = sys.stdin.readline

n,m = list(map(int,input().split()))
 
s = []


 
def dfs():
    con = True
    if len(s)==m:
      for i in range(m-1): 
        if s[i] > s[i+1] :
          con = False
      if con :
        print(' '.join(map(str,s)))
        con = True
        return
      return

    for i in range(1,n+1):
        if i not in s:
            s.append(i)
            dfs()
            s.pop()

dfs()

