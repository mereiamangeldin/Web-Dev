n = int(input())
temp = input()
arr = temp.split(' ')
arr = [int(i) for i in arr]

for i in range(len(arr)):
    if i % 2 == 0:
        print(arr[i], end=' ')