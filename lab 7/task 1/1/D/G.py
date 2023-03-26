n = int(input())
temp = input()
arr = temp.split(' ')
arr = [int(i) for i in arr]
arr2 = [arr[i] for i in range(len(arr)-1, -1, -1)]

for i in arr2:
    print(i, end=' ')

