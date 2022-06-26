import sys

burgerMin = 2001


    
for i in range(3) :
    x = int(input())
    if burgerMin > x :
        burgerMin = x
    
y1 = int(input())
y2 = int(input())

if y1 > y2 : 
    print(burgerMin + y2 - 50)
else :
    print(burgerMin + y1 - 50)