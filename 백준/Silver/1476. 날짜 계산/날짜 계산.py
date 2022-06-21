import sys

x,y,z = input().split()

x = int(x)
y = int(y)
z = int(z)

e,s,m = 1,1,1

year = 1

while True : 

  if x == e and y == s and z == m :
    print(year)
    break

  e += 1
  s += 1 
  m += 1
  year += 1

  if e == 16 :
    e = 1

  if s == 29 :
    s = 1

  if m == 20 :
    m = 1