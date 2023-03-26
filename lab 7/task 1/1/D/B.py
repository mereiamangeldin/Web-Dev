n = int(input())
temp = input()
arr = temp.split(' ')
arr = [int(i) for i in arr]

for i in arr:
    if i % 2 == 0:
        print(i, end=' ')