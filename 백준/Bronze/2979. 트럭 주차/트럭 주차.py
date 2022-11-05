A,B,C = map(int, input().split())

price = [0 for _ in range(100)]

sum = 0

for i in range(3):
    hi, bye = map(int, input().split())
    for j in range(hi,bye):
        price[j] += 1

for i in range(100):
    if price[i] == 1 :
        sum += A
    if price[i] == 2 :
        sum += B*2
    if price[i] == 3 :
        sum += C*3

print(sum)