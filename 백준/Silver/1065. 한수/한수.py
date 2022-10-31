N = int(input())

count = 0

if N <= 99:
    print(N)
elif N == 1000 : 
    print(144)
else : 
    for i in range(100 ,N+1) : 
        num = list(str(i))
        if(int(num[0]) - int(num[1]) == int(num[1]) - int(num[2])):
            count += 1
 
    print(99+ count)
