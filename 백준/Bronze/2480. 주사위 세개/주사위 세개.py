x,y,z = map(int, input().split())

if x == y == z  :
    print(x*1000+10000)

elif x == y and y != z:
    print(1000 + x*100)
elif y ==z and x != z:
    print(1000 + y*100)
elif x ==z and y != z:
    print(1000 + z*100)
elif x != y and y != z : 
    print(max(x,y,z)*100)