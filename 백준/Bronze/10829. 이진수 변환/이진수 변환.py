N = int(input())

binaryArr = []

while N != 0:
    binaryArr.append(N % 2)
    N = N // 2

binaryArr.reverse()

result = ''.join(map(str, binaryArr))

print(result)
