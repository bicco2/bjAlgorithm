element = []

firstArr = list(map(int, input().split()))

n = firstArr[0]

for i in range(1,len(firstArr)):
    element.append(firstArr[i])

while len(element) != n:
    node = list(map(int, input().split()))
    for i in range(len(node)):
        element.append(node[i])

reverseElement = []

for i in range(len(element)):
    convertInt = ""
    eachElement = list(str(element[i]))
    eachElement = eachElement[::-1]
    for j in range(len(eachElement)):
        convertInt += eachElement[j]
    element[i] = int(convertInt)
    
element.sort()

for x in element:
    print(x)